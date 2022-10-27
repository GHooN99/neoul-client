import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "@components/Button";
import { Typography } from "@components/Typography";
import { IMAGE_MAIN_LOGO } from "@libs/constants/assetsPath";
import { fadeIn } from "@styles/keyframes/fades";

const MainPage: NextPage = () => {
  const router = useRouter();
  const handleLoginButtonClick = () => {
    router.push("/login");
  };
  return (
    <StyledWrapper>
      <div className="logo-image-wrapper">
        <Image src={IMAGE_MAIN_LOGO} width="1500" height="1200" alt="logo" />
      </div>
      <Typography className="main-typo" variant="h2" align="center">
        오늘 하루, 어떠셨나요? 🤔
      </Typography>
      <Typography className="sub-typo" variant="p" align="center">
        모두와 함께 소중한 하루를 나눠보세요 🐣
      </Typography>

      <Button
        onClick={handleLoginButtonClick}
        className="login-button"
        fullWidth
        color="main"
      >
        이메일로 로그인
      </Button>
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  .logo-image-wrapper {
    padding: 120px 0 0;
  }

  .main-typo {
    margin-bottom: 16px;
    animation: ${fadeIn} 1s linear;
  }

  .sub-typo {
    font-size: 18px;
    opacity: 0;
    color: ${({ theme }) => theme.texts.sub};
    animation: ${fadeIn} 1s linear;
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
  .login-button {
    position: absolute;
    bottom: 80px;
  }
`;
