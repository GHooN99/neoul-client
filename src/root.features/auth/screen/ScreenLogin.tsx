import styled from "styled-components";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Typography } from "@components/Typography";

const ScreenLogin = () => {
  return (
    <StyledWrapper>
      <div className="greeting-message-wrapper">
        <Typography variant="h2">다시만나 반가워요✋</Typography>
        <Typography variant="h2">너:울 입니다 😆 </Typography>
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="input-group"
      >
        <Input fullWidth type="email" placeholder="이메일" />
        <Input fullWidth type="password" placeholder="비밀번호" />
        <Button type="submit" fullWidth>
          로그인
        </Button>
      </form>
    </StyledWrapper>
  );
};

export default ScreenLogin;

const StyledWrapper = styled.section`
  .greeting-message-wrapper {
    padding: 200px 0 50px;
  }
  & input {
    margin-bottom: 20px;
  }
  button {
    margin-top: 60px;
  }
`;
