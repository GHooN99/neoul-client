import { NextPage } from "next";
import { ScreenTodo } from "@features/todo";

const Home: NextPage = () => {
  return (
    <div>
      hello 안녕!
      <ScreenTodo />
    </div>
  );
};

export default Home;
