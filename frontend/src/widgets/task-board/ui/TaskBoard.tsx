import { useState } from "react";
import { TaskColumn } from "./TaskColumn";
import { Task, TaskStatus } from "@/shared/types/task";
import {
  EditTaskDialog,
  DeleteTaskDialog,
  CreateTaskDialog,
} from "@/features/task";
import {
  useTasks,
  useUpdateTask,
  useDeleteTask,
  useCreateTask,
} from "@/features/task";

const COLUMNS: TaskStatus[] = ["todo", "in-progress", "done"];

export const TaskBoard = () => {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deletingTaskId, setDeletingTaskId] = useState<string | null>(null);

  const createTask = useCreateTask();
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();
  const { data: tasks = [], isLoading, error } = useTasks();

  const handleCreate = (data: { description: string }) => {
    createTask.mutate(data);
  };

  const handleEdit = (data: Task) => {
    updateTask.mutate({ id: data._id, data });
    setEditingTask(null);
  };

  const handleDelete = () => {
    if (!deletingTaskId) return;
    deleteTask.mutate(deletingTaskId);
    setDeletingTaskId(null);
  };

  if (isLoading) {
    return <TaskBoardSkeleton />;
  }

  if (error) {
    return <TaskBoardError error={error} />;
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b bg-card">
        <div>
          <h1 className="text-lg font-bold tracking-tight">Задачи</h1>

          <p className="text-xs text-muted-foreground">
            {tasks.length} {tasks.length === 1 ? "задача" : "задач"}
          </p>
        </div>

        <CreateTaskDialog
          onSubmit={handleCreate}
          isLoading={createTask.isPending}
        />
      </header>

      <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {COLUMNS.map((status) => (
            <TaskColumn
              key={status}
              status={status}
              tasks={tasks.filter((t: Task) => t.status === status)}
              onEditTask={setEditingTask}
              onDeleteTask={setDeletingTaskId}
            />
          ))}
        </div>
      </div>

      <EditTaskDialog
        task={editingTask}
        open={!!editingTask}
        onOpenChange={(open) => !open && setEditingTask(null)}
        onSubmit={handleEdit}
        isLoading={updateTask.isPending}
      />

      <DeleteTaskDialog
        open={!!deletingTaskId}
        onOpenChange={(open) => !open && setDeletingTaskId(null)}
        onConfirm={handleDelete}
        isLoading={deleteTask.isPending}
      />
    </div>
  );
};

const TaskBoardSkeleton = () => (
  <div className="flex flex-col h-full">
    <header className="px-4 sm:px-6 py-4 border-b bg-card">
      <div className="h-6 w-24 bg-muted animate-pulse rounded" />
    </header>
    <div className="flex-1 p-4 sm:p-6">
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 h-96 bg-muted animate-pulse rounded" />
        ))}
      </div>
    </div>
  </div>
);

const TaskBoardError = ({ error }: { error: Error }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <p className="text-destructive">Ошибка загрузки задач</p>
      <p className="text-sm text-muted-foreground">{error.message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        Попробовать снова
      </button>
    </div>
  </div>
);
