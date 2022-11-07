import { useRouter } from "next/router";
import { Suspense } from "react";
import styled from "styled-components";
import { Button } from "@components/Button";
import { Typography } from "@components/Typography";
import { AppHeader } from "@layouts/components/AppHeader";
import { PagePath } from "@libs/constants/pagePath";
import { PostList, PostListLoading } from "../components/PostList";

const ScreenPostList = () => {
  const router = useRouter();

  const handleCreateButtonClick = () => {
    router.push(PagePath.CREATE);
  };

  return (
    <StyledWrapper>
      <AppHeader className="post-list-header">Neoul 너:울</AppHeader>
      <Typography className="message" variant="p">
        모두의 하루를 구경해보세요 📓
      </Typography>

      {/* Todo ErrorBoundary */}
      {/* <PostListErrorBoundary> */}
      {/* <Suspense fallback={<PostListLoading />}> */}
      <PostList />
      {/* </Suspense> */}

      <Button
        className="create-button"
        onClick={handleCreateButtonClick}
        color="main"
      >
        나도 작성하기
      </Button>
      {/* </PostListErrorBoundary> */}
    </StyledWrapper>
  );
};

export default ScreenPostList;

const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  .post-list-header {
    color: ${({ theme }) => theme.texts.primary};
  }
  .message {
    padding: 90px 0 20px;
  }
  .create-button {
    position: fixed;
    max-width: 550px;
    // padding 30 * 2
    width: calc(100% - 60px);
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 30px;
  }
`;
