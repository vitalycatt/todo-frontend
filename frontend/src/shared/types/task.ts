export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  _id: string;
  description?: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskDto {
  description: string;
  status?: "todo" | "in-progress" | "done";
}

export interface UpdateTaskDto {
  description?: string;
  status?: "todo" | "in-progress" | "done";
}

export type TaskFormData = CreateTaskDto;

export type TaskEditorState =
  | { type: "idle" }
  | { type: "creating"; draft: TaskFormData }
  | { type: "editing"; id: string; draft: TaskFormData };

export const STATUS_CONFIG: Record<
  TaskStatus,
  { label: string; color: string }
> = {
  todo: { label: "К выполнению", color: "bg-status-todo" },
  "in-progress": { label: "В работе", color: "bg-status-in-progress" },
  done: { label: "Готово", color: "bg-status-done" },
};

export interface TaskFilters {
  status?: Task["status"];
  search?: string;
}
