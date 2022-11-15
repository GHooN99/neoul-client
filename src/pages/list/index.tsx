import cookies from "next-cookies";
import type { NextPage } from "next";
import Router from "next/router";
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

PostListPage.getInitialProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const authToken = allCookies[AUTH_COOKIE_KEY];

  // server side
  if (ctx.res) {
    if (!authToken) {
      ctx.res.writeHead(307, { Location: PagePath.LOGIN });
      ctx.res.end();
      return {};
    }

    const queryClient = new QueryClient();
    authService.setAuthToken(authToken);

    await queryClient.prefetchQuery(
      postKeys.lists(),
      postService.getAllPosts()
    );

    return {
      dehydratedState: dehydrate(queryClient),
    };
  }
  // client side
  if (!authToken) {
    Router.replace(PagePath.LOGIN);
  }
  return {};
};
