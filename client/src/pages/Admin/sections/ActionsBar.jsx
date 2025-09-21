// Bulk actions toolbar; actions are placeholders for now
import { Button } from "@/components/ui/button";

export default function ActionsBar() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Button variant="secondary">Accept</Button>
      <Button variant="secondary">Reject</Button>
      <Button>View Details</Button>
    </div>
  );
}
