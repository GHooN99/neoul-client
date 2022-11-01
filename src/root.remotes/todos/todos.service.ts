import { API } from "@remotes/apiClient";
import type { Todo, TodoInput, TodoResponse } from "./todos.types";

export const todosService = {
  path: "posts" as const,

  getAllTodos: async () => {
    const response = await API.GET<TodoResponse<Todo[]>>(
      `${todosService.path}`
    );
    return response.data;
  },
  getTodoDetail: (id: number) => async () =>
    API.GET<TodoResponse<Todo>>(`${todosService.path}/${id}`),

  createTodo: (input: TodoInput) => async () =>
    API.POST<TodoInput, TodoResponse<Todo>>(`${todosService.path}`, input),

  editTodo: (id: number, input: TodoInput) => async () =>
    API.PUT<TodoInput, TodoResponse<Todo>>(`${todosService.path}/${id}`, input),

  deleteTodo: (id: number) => async () =>
    API.DELETE<TodoResponse<Todo>>(`${todosService.path}/${id}`),
};
