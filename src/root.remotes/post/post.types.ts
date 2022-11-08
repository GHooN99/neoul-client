export interface Post {
  content: string;
  status: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export type PostInput = Pick<Post, "title" | "content" | "status">;

export type PostResponse<T> = {
  data: T;
};
