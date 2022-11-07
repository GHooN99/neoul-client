import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@hooks/useToast";
import type { Post } from "@remotes/post";
import { postKeys } from "@remotes/post/post.keys";
import { postService } from "@remotes/post/post.service";
import PostListItem from "./PostListItem";

const posts: Post[] = [
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
  {
    id: "123",
    content: "1213",
    title: "안녕",
    status: "😆",
    createdAt: "23",
    updatedAt: "23",
  },
];

const PostList = () => {
  return (
    <StyledWrapper>
      {posts!.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </StyledWrapper>
  );
};

export default PostList;

const StyledWrapper = styled.ul`
  width: 100%;
`;
