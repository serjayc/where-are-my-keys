import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { UserInput, userSchema } from "@/features/enlist/schema";
import { useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
}

const GOOGLE_DRIVE_FILE_ID = "1Jd-ApvHVAijGO99MvGav1pEajJGKEVux";

export default function PresskitForm({ onClose }: Props) {
  const router = useRouter();

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
      await api.post("/enlist", data);
      reset();

      const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

      router.push(downloadUrl);

      onClose();

      toast.success(`Thank you for subscribing to out updates.`);
    } catch (error) {
      toast.success(`Something went wrong. Try again later.`);
      reset();
      console.error("Subscription Error:", error);
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
      <p className="text-xs text-muted-foreground">
        By submitting, you request press-kit updates at this email address.
      </p>
      <Button disabled={isSubmitting} type="submit" className="w-full">
        {isSubmitting ? "Downloading..." : "Free Download"}
      </Button>
    </form>
  );
}
