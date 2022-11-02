import { API } from "@remotes/apiClient";
import type { Post, PostInput, PostResponse } from "./post.types";

export const postService = {
  path: "posts" as const,

  getAllPosts: () => async () => {
    const response = await API.GET<PostResponse<Post[]>>(`${postService.path}`);
    return response.data;
  },

  getPostDetail: (id: number) => async () =>
    API.GET<PostResponse<Post>>(`${postService.path}/${id}`),

  createPost: () => async (input: PostInput) =>
    API.POST<PostInput, PostResponse<Post>>(`${postService.path}`, input),

  editPost: (id: number, input: PostInput) => async () =>
    API.PUT<PostInput, PostResponse<Post>>(`${postService.path}/${id}`, input),

  deletePost: (id: number) => async () =>
    API.DELETE<PostResponse<Post>>(`${postService.path}/${id}`),
};
