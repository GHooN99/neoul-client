import React from "react";
import styled from "styled-components";
import { Button } from "../src/root.components/Button";

export const Home = () => {
  const handleClickGithubPage = () => {
    window.open("https://github.com/ghoon99/neoul-client", "_blank");
  };

  return (
    <StyledWrapper>
      <img
        className="logo-image"
        src="/images/mainLogo.png"
        width={250}
        height={250}
      />
      <h1 className="welcome-message">Neoul Component Docs ✨</h1>
      <p className="description">
        Neoul에서 사용하는 컴포넌트를 정리한 storybook 페이지입니다.
        <br />각 story Docs 탭에 컴포넌트 데모와 props에 대한 설명을 확인할 수
        있습니다.
      </p>
      <div className="buttons">
        <Button color="transparent" onClick={handleClickGithubPage}>
          Github
        </Button>
        <Button color="transparent" onClick={() => {}}>
          Service Page
        </Button>
      </div>
    </StyledWrapper>
  );
};

export default {
  title: "Home",
  component: Home,
  parameters: {
    viewMode: "Story",
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
    },
    controls: { disabled: true },
    options: {
      showPanel: false,
    },
  },
};

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  text-align: center;
  .logo-image {
    margin-top: 120px;
    border-radius: 20px;
  }
  .welcome-message {
    margin-top: 10px;
    font-size: 32px;
    padding: 20px;
  }
  .description {
    font-size: 20px;
    line-height: 1.8;
    padding: 12px;
  }
  .buttons {
    padding: 20px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
