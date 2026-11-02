import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface Props {
  btnText: string;
  isPresskit?: boolean;
}

export default function EnlistForm({ btnText, isPresskit }: Props) {
  return (
    <form className="space-y-4 max-w-md mx-auto">
      {isPresskit ? (
        <>
          <Field>
            <FieldLabel htmlFor="email" className="text-foreground">
              Email for press-kit access
            </FieldLabel>
            <Input id="email" placeholder="you@example.com" />
          </Field>
          <p className="text-xs text-muted-foreground">
            By submitting, you request press-kit updates at this email address.
          </p>
        </>
      ) : (
        <>
          <Field>
            <FieldLabel htmlFor="email" className="text-foreground">
              Email Address
            </FieldLabel>
            <Input id="email" placeholder="you@example.com" />
          </Field>
        </>
      )}
      <Button type="submit" className="w-full">
        {btnText}
      </Button>
    </form>
  );
}
