import cookies from "next-cookies";
import type { GetServerSideProps, NextPage } from "next";
import ScreenLogin from "@features/auth/screen/ScreenLogin";
import { AUTH_COOKIE_KEY } from "@libs/constants/cookies";
import { PagePath } from "@libs/constants/pagePath";

const LoginPage: NextPage = () => {
  return <ScreenLogin />;
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const authToken = allCookies[AUTH_COOKIE_KEY];
  console.log(ctx);
  if (authToken) {
    return {
      redirect: {
        statusCode: 307,
        destination: PagePath.LIST,
      },
    };
  }

  return {
    props: {},
  };
};
