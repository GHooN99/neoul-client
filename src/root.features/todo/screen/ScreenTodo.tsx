import { useState } from "react";
import styled from "styled-components";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
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
      <StyledWrapper>
        <Input
          className="classNamehi"
          fullWidth
          hasError={true}
          errorMessage="올바른 이메일 형식을 입력해주세요."
        />
        <Input
          style={{ marginBottom: 20 }}
          fullWidth
          hasError={true}
          errorMessage="마진 바텀"
        />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="이메일"
          type="email"
          fullWidth
        />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="비밀번호 (8자 이상)"
          type="password"
          fullWidth
        />
        <Button
          onClick={handleClick}
          loading={isLoading}
          fullWidth
          color="main"
        >
          로그인
        </Button>
      </StyledWrapper>
    </div>
  );
};

export default ScreenTodo;

const StyledWrapper = styled.div`
  .classNamehi {
    margin-bottom: 50px;
  }
`;
