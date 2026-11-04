import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { UserInput, userSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { toast } from "sonner";

export default function EnlistForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<UserInput>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: UserInput) => {
    try {
      const res = await api.post("/enlist", data);
      reset();

      if (res.data.alreadySubscribed) {
        toast.success(
          "You're already enlisted. Checkout the House to get free presskit materials!",
        );
      } else {
        toast.success("Successfuly enlisted");
      }
    } catch (error) {
      toast.error(`Something went wrong. Try again later.`);
      reset();
      console.error("Enlistment failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <Field>
        <FieldLabel htmlFor="name" className="text-foreground">
          Full Name (optional)
        </FieldLabel>
        <Input id="name" placeholder="John Doe" {...register("name")} />
      </Field>
      <Field>
        <FieldLabel htmlFor="email" className="text-foreground">
          Email Address
        </FieldLabel>
        <Input
          id="email"
          placeholder="john@example.com"
          {...register("email")}
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </Field>
      <Button disabled={isSubmitting} type="submit" className="w-full">
        {isSubmitting ? "Enlisting..." : "Get Enlisted"}
      </Button>
    </form>
  );
}
