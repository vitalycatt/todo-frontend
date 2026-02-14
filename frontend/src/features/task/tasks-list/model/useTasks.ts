import { taskApi } from "@/entities/task";
import { useQuery } from "@tanstack/react-query";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => taskApi.getAllTasks().then((res) => res.data),
  });
};
