import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Task, STATUS_CONFIG } from "@/shared/types/task";
import { Pencil, Trash2, GripVertical } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (taskId: string) => void;
}

export const TaskCard = ({ task, onEdit, onDelete }: TaskCardProps) => {
  const statusConfig = STATUS_CONFIG[task.status];

  return (
    <Card className="group relative p-3 shadow-sm hover:shadow-md transition-shadow cursor-default">
      <div className="flex items-start gap-2">
        <GripVertical className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />

        <div className="flex-1 min-w-0">
          {task.description && (
            <p className="text-sm font-medium leading-snug truncate">
              {task.description}
            </p>
          )}

          <div className="mt-2 flex items-center justify-between">
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${statusConfig.color}`}
              />
              {statusConfig.label}
            </Badge>

            <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => onEdit?.(task)}
              >
                <Pencil className="h-3 w-3" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-destructive hover:text-destructive"
                onClick={() => onDelete?.(task._id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
