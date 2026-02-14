import { useState } from "react";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CreateTaskDialogProps {
  isLoading?: boolean;
  onSubmit?: (data: { description: string }) => void;
}

export const CreateTaskDialog = ({
  isLoading,
  onSubmit,
}: CreateTaskDialogProps) => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    onSubmit?.({ description: description.trim() });
    setDescription("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" />

          <span className="hidden sm:inline">Новая задача</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Новая задача</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              placeholder="Добавьте описание..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Отмена
            </Button>

            <Button type="submit" disabled={!description.trim()}>
              {isLoading ? "Создание..." : "Создать"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
