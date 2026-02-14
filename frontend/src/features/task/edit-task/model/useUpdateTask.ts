import { taskApi } from "@/entities/task";
import { queryClient } from "@/app/index";
import { useMutation } from "@tanstack/react-query";
import { Task, UpdateTaskDto } from "@/shared/types/task";

export const useUpdateTask = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTaskDto }) =>
      taskApi.updateTask(id, data).then((res) => res.data),

    onSuccess: (updatedTask, variables) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.setQueryData<Task[]>(["tasks"], (old = []) =>
        old.map((task) => (task._id === variables.id ? updatedTask : task)),
      );
    },

    onError: (error) => {
      console.error("Failed to update task:", error);
    },
  });
};
