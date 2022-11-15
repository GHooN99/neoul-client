import cookies from "next-cookies";
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastProvider } from "@components/Toast";
import AppLayout from "@layouts/screen/AppLayout";
import { authService } from "@remotes/auth/auth.service";
import "@styles/fonts.css";
import { GlobalStyles } from "@styles/globalStyles";
import { theme } from "@styles/theme";
import { API } from "@remotes/apiClient";
import { AUTH_COOKIE_KEY } from "@libs/constants/cookies";

interface AppPageProps {
  authToken?: string;
  dehydratedState: DehydratedState;
}

const NeoulApp = ({ Component, pageProps }: AppProps<AppPageProps>) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
        },
      },
    })
  );

  console.log(pageProps)
  useEffect(() => {
    if (pageProps.authToken) authService.setAuthToken(pageProps.authToken);
  }, [pageProps.authToken]);

  return (
    <>
      <Head>
        <title>Neoul:너울</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastProvider>
          <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== "production" && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
            <Hydrate state={pageProps.dehydratedState}>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </Hydrate>
          </QueryClientProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  );
};

export default NeoulApp;

NeoulApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  const allCookies = cookies(ctx);
  const authToken = allCookies[AUTH_COOKIE_KEY];
  return {
    pageProps:{
      ...pageProps,
      authToken,
    }
  }
}