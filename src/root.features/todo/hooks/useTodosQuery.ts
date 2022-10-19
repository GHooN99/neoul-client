import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { todoKeys, todoService } from "@remotes/todos";

export const useTodosQuery = () => {
  return useQuery(todoKeys.lists(), todoService.getAllTodos, {
    onError(err) {
      if (axios.isAxiosError(err)) {
        console.log(err);
      }
      console.log("not axios ");
    },
    cacheTime: 2000 * 60,
    staleTime: 1000 * 60,
  });
};

export const useTodoDetailQuery = (todoId: number) => {
  return useQuery(
    todoKeys.detail(todoId),
    todoService.getTodoDetail(todoId),
    {}
  );
};
