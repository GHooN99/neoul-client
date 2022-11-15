import cookies from "next-cookies";
import type { NextPage } from "next";
import Router from "next/router";
import ScreenLogin from "@features/auth/screen/ScreenLogin";
import { AUTH_COOKIE_KEY } from "@libs/constants/cookies";
import { PagePath } from "@libs/constants/pagePath";

const LoginPage: NextPage = () => {
  return <ScreenLogin />;
};

export default LoginPage;

LoginPage.getInitialProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const authToken = allCookies[AUTH_COOKIE_KEY];

  if (authToken) {
    if (ctx.res) {
      ctx.res.writeHead(307, { Location: PagePath.LIST });
      ctx.res.end();
      return {
        authToken,
      };
    }

    Router.replace(PagePath.LIST);
    return {
      authToken,
    };
  }

  return {};
};
