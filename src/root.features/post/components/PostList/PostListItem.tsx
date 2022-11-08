import { useRouter } from "next/router";
import styled from "styled-components";
import { Typography } from "@components/Typography";
import { PagePath } from "@libs/constants/pagePath";
import type { Post } from "@remotes/post";

interface PostListItemProps {
  post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
  const router = useRouter();
  const { status, title, createdAt, id } = post;

  const handleListItemClick = () => {
    router.push(`${PagePath.LIST}/[id]`, `${PagePath.LIST}/${id}`);
  };

  return (
    <StyledWrapper onClick={handleListItemClick}>
      <span className="status">😆</span>
      <Typography variant="main" className="post-title">
        {title ?? "안녕"}
      </Typography>
      <Typography variant="sub2" className="created-at">
        {"2022년 10월 12일"}
      </Typography>
    </StyledWrapper>
  );
};

export default PostListItem;

const StyledWrapper = styled.li`
  &:focus,
  :hover,
  :active {
    opacity: 0.6;
  }

  position: relative;
  padding: 10px;
  height: 70px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  color: ${({ theme }) => theme.texts.main};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.upper};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .status {
    font-size: 20px;
    padding: 6px;
    margin-right: 6px;
  }

  .post-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .created-at {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;
