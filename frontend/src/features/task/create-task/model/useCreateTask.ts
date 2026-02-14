import { taskApi } from "@/entities/task";
import { CreateTaskDto } from "@/shared/types/task";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTaskDto) =>
      taskApi.createTask(data).then((res) => res.data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },

    onError: (error) => {
      console.error("Failed to create task:", error);
    },
  });
};
