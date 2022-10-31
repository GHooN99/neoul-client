import { API } from "@remotes/apiClient";
import { AuthResponse, UserInput } from "./auth.types";

export const authService = {
  path: "users" as const,

  signIn: () => async (userInput: UserInput) =>
    API.POST<UserInput, AuthResponse>(`${authService.path}/login`, userInput),

  signUp: () => async (userInput: UserInput) =>
    API.POST<UserInput, AuthResponse>(`${authService.path}/create`, userInput),
  /*
  signOut: () => () => {},
  */
};
