import { API } from "@remotes/apiClient";
import { AuthResponse, UserInput } from "./auth.types";

export const authService = {
  path: "users" as const,

  signIn: (userInput: UserInput) => () =>
    API.POST<UserInput, AuthResponse>(`${authService.path}/login`, userInput),

  signUp: (userInput: UserInput) => () =>
    API.POST<UserInput, AuthResponse>(`${authService.path}/create`, userInput),
  /*
  signOut: () => () => {},
  */
};
