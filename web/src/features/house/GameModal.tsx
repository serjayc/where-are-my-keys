import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PresskitForm from "@/features/house/PresskitForm";

interface Props {
  onClose: () => void;
}

export default function GameModal({ onClose }: Props) {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="[&>button]:hidden sm:max-w-md">
        <DialogHeader className="pb-2 border-b border-border">
          <DialogTitle className="text-lg">Your next discovery</DialogTitle>
          <DialogDescription className="text-base">
            All nine clues found. Leave your email to request premium film
            information and official press assets when they become available.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-muted-foreground text-base divide-y divide-border">
          <ul className="pb-2 space-y-1">
            <li>Film notes & Character information</li>
            <li>Official stills & Approved artwork</li>
            <li>Press materials & Production credits</li>
          </ul>
          <p className="pb-2">
            Official press-kit assets are awaiting supply. This records your
            request only; automatic email delivery is not yet connected.
          </p>
          <PresskitForm onClose={onClose} />
          <Button variant="outline" onClick={onClose} className="w-full">
            Back to the House
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
