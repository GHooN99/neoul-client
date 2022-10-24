import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastProvider } from "@components/Toast";
import { GlobalStyles } from "@styles/globalStyles";
import { theme } from "@styles/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps<Record<string, unknown>>) => {
  return (
    <>
      <Head>
        <title>Neoul:너울</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== "production" && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
