import { Button } from "@components/Button";
import { useTodosQuery } from "../hooks/useTodosQuery";

const ScreenTodo = () => {
  const { data } = useTodosQuery();
  console.log(data);

  return (
    <div style={{ height: 100 }}>
      <h2>안녕하세요 </h2>
      <Button variant="primary">버튼!</Button>
      <Button variant="secondary">버튼!</Button>
      <Button variant="text">버튼!</Button>
      <Button variant="primary" color="gray">
        버튼!
      </Button>
      <Button variant="secondary" color="gray">
        버튼!
      </Button>
      <Button variant="primary" color="gray" fullWidth>
        버튼
      </Button>
    </div>
  );
};

export default ScreenTodo;
