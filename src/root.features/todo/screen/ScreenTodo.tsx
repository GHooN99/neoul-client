import { useState } from "react";
import { Button } from "@components/Button";
import { useTodosQuery } from "../hooks/useTodosQuery";

const ScreenTodo = () => {
  console.log(process.env.NEXT_PUBLIC_DEVELOPMENT_API_BASE_URL);
  const delay = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await delay();
    setIsLoading(false);
  };

  return (
    <div style={{ height: 100, padding: "0 20px" }}>
      <h2>안녕하세요 </h2>
      <Button onClick={handleClick} loading={isLoading} fullWidth color="main">
        로그인
      </Button>
      <Button color="red">삭제하기</Button>
      <Button style={{ width: 300 }} disabled color="gray">
        disabled
      </Button>
      <Button style={{ width: 300 }} color="white">
        수정하기
      </Button>
      <Button style={{ width: 100 }} size="small" color="white">
        취소
      </Button>
      <Button style={{ width: 100 }} size="small" color="red">
        삭제
      </Button>
    </div>
  );
};

export default ScreenTodo;
