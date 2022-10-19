export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
}

export type UserInput = Pick<User, "email" | "password">;

export interface AuthResponse {
  message: string;
  token: string;
}
