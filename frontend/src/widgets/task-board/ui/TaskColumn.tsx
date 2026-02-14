import { TaskCard } from "@/entities/task";
import { Task, TaskStatus, STATUS_CONFIG } from "@/shared/types/task";

interface TaskColumnProps {
  status: TaskStatus;
  tasks: Task[];
  onEditTask?: (task: Task) => void;
  onDeleteTask?: (taskId: string) => void;
}

export const TaskColumn = ({
  tasks,
  status,
  onEditTask,
  onDeleteTask,
}: TaskColumnProps) => {
  const config = STATUS_CONFIG[status];

  return (
    <div className="flex flex-col min-w-[280px] w-full md:w-80">
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className={`w-2 h-2 rounded-full ${config.color}`} />

        <h3 className="text-sm font-semibold text-foreground">
          {config.label}
        </h3>

        <span className="text-xs text-muted-foreground ml-auto">
          {tasks.length}
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1 p-2 rounded-xl bg-muted/50 min-h-[120px]">
        {tasks.length === 0 && (
          <p className="text-xs text-muted-foreground text-center py-8">
            Нет задач
          </p>
        )}

        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};
