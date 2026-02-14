import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { STATUS_CONFIG } from "@/shared/types/task";
import { Task, TaskStatus } from "@/shared/types/task";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";

interface EditTaskDialogProps {
  task: Task | null;
  open: boolean;
  isLoading?: boolean;
  onSubmit?: (task: Task) => void;
  onOpenChange: (open: boolean) => void;
}

export const EditTaskDialog = ({
  task,
  open,
  isLoading,
  onSubmit,
  onOpenChange,
}: EditTaskDialogProps) => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");

  useEffect(() => {
    if (task) {
      setDescription(task.description || "");
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    onSubmit?.({
      ...task,
      description: description.trim(),
      status,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Редактировать задачу</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-description">Описание</Label>
            <Textarea
              id="edit-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Статус</Label>

            <Select
              value={status}
              onValueChange={(v) => setStatus(v as TaskStatus)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {(
                  Object.entries(STATUS_CONFIG) as [
                    TaskStatus,
                    (typeof STATUS_CONFIG)[TaskStatus],
                  ][]
                ).map(([key, config]) => (
                  <SelectItem key={key} value={key}>
                    <span className="flex items-center gap-2">
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${config.color}`}
                      />
                      {config.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Отмена
            </Button>

            <Button type="submit" disabled={!description.trim()}>
              {isLoading ? "Сохранение..." : "Сохранить"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
