import { NextPage } from "next";
import { ScreenTodo } from "@features/todo";

const Home: NextPage = (props) => {
  console.log(props);
  console.log("hihihihi");
  return (
    <div>
      hello 안녕!
      <ScreenTodo />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  console.log(process.env.DEVELOPMENT_API_BASE_URL);

  return {
    props: {},
  };
};
