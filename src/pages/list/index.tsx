import cookies from "next-cookies";
import type { GetServerSideProps, NextPage } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { Typography } from "@components/Typography";
import { AUTH_COOKIE_KEY } from "@libs/constants/cookies";
import { PagePath } from "@libs/constants/pagePath";
import { authService } from "@remotes/auth/auth.service";
import { todoKeys, todoService } from "@remotes/todos";

const PostListPage: NextPage = () => {
  const { data: todos } = useQuery(todoKeys.lists(), todoService.getAllTodos);

  return (
    <div>
      <Typography variant="h2">모두의 하루를 구경하세요 😄</Typography>
      <div style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
        {todos &&
          todos?.map((todo) => (
            <Typography variant="p" align="center" key={todo.id}>
              {todo.title}
            </Typography>
          ))}
      </div>
    </div>
  );
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
  await queryClient.fetchQuery(todoKeys.lists(), todoService.getAllTodos);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
