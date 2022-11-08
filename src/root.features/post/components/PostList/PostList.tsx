import styled from "styled-components";
import { PageError } from "@components/PageError";
import { usePostListQuery } from "@features/post/hooks/usePostListQuery";
import { API } from "@remotes/apiClient";
import PostListItem from "./PostListItem";

const PostList = () => {
  const { isError, data } = usePostListQuery();
  console.log(API);
  // prefetch 된 데이터이기 때문에 loading 이 없음
  const posts = data ?? [];

  if (isError) return <PageError />;

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
