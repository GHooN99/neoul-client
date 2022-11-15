import { useQuery } from "@tanstack/react-query";
import { postKeys } from "@remotes/post/post.keys";
import { postService } from "@remotes/post/post.service";

export const usePostListQuery = () => {
  return useQuery(postKeys.lists(), postService.getAllPosts(), {
    staleTime: 1000 * 10,
  });
};
