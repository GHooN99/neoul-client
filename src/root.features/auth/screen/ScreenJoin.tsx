import { AppHeader } from "@layouts/components/AppHeader";
import { Greetring } from "../components/Greeting";
import { JoinForm } from "../components/JoinForm";

/**
 * #### 회원가입 페이지 시작점 컴포넌트
 * - 헤더
 * - 환영메시지
 * - 회원가입 폼
 */
const ScreenJoin = () => {
  return (
    <>
      <AppHeader>회원가입</AppHeader>
      <section>
        <Greetring page="join" />
        <JoinForm />
      </section>
    </>
  );
};

export default ScreenJoin;
