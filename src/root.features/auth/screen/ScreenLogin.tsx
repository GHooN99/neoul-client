import { AppHeader } from "@layouts/components/AppHeader";
import { Greetring } from "../components/Greeting";
import { LoginForm } from "../components/LoginForm";

/**
 * #### 로그인 페이지 시작점 컴포넌트
 * - 헤더
 * - 환영메시지
 * - 로그인 폼
 */
const ScreenLogin = () => {
  return (
    <>
      <AppHeader>로그인</AppHeader>
      <section>
        <Greetring page="login" />
        <LoginForm />
      </section>
    </>
  );
};

export default ScreenLogin;
