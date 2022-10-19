import { API } from "@remotes/apiClient";
import { Todo, TodoInput } from "./todos.types";

export const todosService = {
  path: "todos" as const,

  getAllTodos: () => API.GET<Todo[]>(`${todosService.path}`),

  getTodoDetail: (id: number) => () =>
    API.GET<Todo>(`${todosService.path}/${id}`),

  createTodo: (input: TodoInput) => () =>
    API.POST<TodoInput, Todo>(`${todosService.path}`, input),

  editTodo: (id: number, input: TodoInput) => () =>
    API.PUT<TodoInput, Todo>(`${todosService.path}/${id}`, input),

  deleteTodo: (id: number) => () =>
    API.DELETE<Todo>(`${todosService.path}/${id}`),
};
