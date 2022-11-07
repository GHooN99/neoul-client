import cookies from "next-cookies";
import type { GetServerSideProps, NextPage } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import ScreenPostList from "@features/post/screen/ScreenPostList";
import { AUTH_COOKIE_KEY } from "@libs/constants/cookies";
import { PagePath } from "@libs/constants/pagePath";
import { authService } from "@remotes/auth/auth.service";
import { postKeys } from "@remotes/post/post.keys";
import { postService } from "@remotes/post/post.service";

const PostListPage: NextPage = () => {
  return <ScreenPostList />;
};

export default PostListPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const authToken = allCookies[AUTH_COOKIE_KEY];

  if (!authToken) {
    return {
      redirect: {
        statusCode: 307,
        destination: PagePath.LOGIN,
      },
    };
  }

  const queryClient = new QueryClient();
  authService.setAuthToken(authToken);

  await queryClient.prefetchQuery(postKeys.lists(), postService.getAllPosts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
