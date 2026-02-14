import { axiosInstance } from "@/shared/api/client";
import { CreateTaskDto, Task, UpdateTaskDto } from "@/shared/types/task";

export const taskApi = {
  createTask: (data: CreateTaskDto) => axiosInstance.post<Task>("/todos", data),
  updateTask: (id: string, data: UpdateTaskDto) =>
    axiosInstance.put<Task>(`/todos/${id}`, data),
  deleteTask: (id: string) => axiosInstance.delete<Task>(`/todos/${id}`),
  getAllTasks: () => axiosInstance.get<Task[]>(`/todos`),
};
