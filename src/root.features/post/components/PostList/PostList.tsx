import styled from "styled-components";
import { PageError } from "@components/PageError";
import { usePostListQuery } from "@features/post/hooks/usePostListQuery";
import { API } from "@remotes/apiClient";
import PostListItem from "./PostListItem";

const PostList = () => {
  const { isError, data, isLoading } = usePostListQuery();

  const posts = data ?? [];

  if (isError) return <PageError />;
  if (isLoading) return <>fetching</>;
  return (
    <StyledWrapper>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </StyledWrapper>
  );
};

export default PostList;

const StyledWrapper = styled.ul`
  width: 100%;
`;
