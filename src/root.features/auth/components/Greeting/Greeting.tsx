import styled from "styled-components";
import { Typography } from "@components/Typography";

interface GreetringProps {
  /**
   * 현재의 페이지 `"login" | "join"`
   */
  page: "login" | "join";
}

const greetingMessage = {
  login: "다시만나 반가워요 ✋",
  join: "찾아주셔서 감사해요 🙏🏻",
} as const;

/**
 *  ### 환영메시지 컴포넌트
 *  - 로그인, 회원가입 페이지에서 사용하는 메시지 텍스트가 다름
 */
const Greeting = ({ page }: GreetringProps) => {
  return (
    <StyledWrapper>
      <Typography variant="h2">{greetingMessage[page]}</Typography>
      <Typography variant="h2">
        <span className="project-name">너:울</span>입니다 😆
      </Typography>
    </StyledWrapper>
  );
};

export default Greeting;

const StyledWrapper = styled.div`
  padding: 200px 0 50px;
  .project-name {
    color: ${({ theme }) => theme.texts.primary};
  }
`;
