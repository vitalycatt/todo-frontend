import { Task } from "@/shared/types/task";
import { taskApi } from "@/entities/task";
import { queryClient } from "@/app/index";
import { useMutation } from "@tanstack/react-query";

export const useDeleteTask = () => {
  return useMutation({
    mutationFn: (id: string) => taskApi.deleteTask(id).then((res) => res.data),

    onSuccess: (data, deletedId) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.setQueryData<Task[]>(["tasks"], (old = []) =>
        old.filter((task) => task._id !== deletedId),
      );
    },

    onError: (error) => {
      console.error("Failed to delete task:", error);
    },
  });
};
