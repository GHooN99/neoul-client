import React from "react";
import styled from "styled-components";
import { pallete } from "../src/root.styles/pallete";

const ColorBox = ({ name, pallete }) => {
  return (
    <div className="pallete-box">
      <span className="pallete-label">{name}</span>
      <span className="hex">{pallete[name]}</span>
      <StyledColorBox color={pallete[name]} />
    </div>
  );
};

export const Pallete = () => {
  const { gray: grayScale, ...colors } = pallete;

  return (
    <StyledWrapper>
      <h1 className="title">Neoul 에서 사용하는 색상 목록입니다.</h1>
      <h1 className="title">gray scale</h1>
      <div className="color-scale">
        {Object.keys(grayScale).map((key, index) => (
          <ColorBox name={key} pallete={grayScale} key={`color_${index}`} />
        ))}
      </div>

      <h1 className="title">colors</h1>
      <div className="color-scale">
        {Object.keys(colors).map((key, index) => (
          <ColorBox name={key} pallete={colors} key={`color_${index}`} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default {
  title: "Colors/Pallete",
  component: Pallete,
  parameters: {
    viewMode: "story",
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
  padding: 30px;
  .title {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .hex {
    margin-left: 8px;
    font-size: 12px;
    color: #979797;
  }
  .color-scale {
    width: 100%;
    display: flex;
    gap: 50px;
    margin-bottom: 50px;
  }
`;

const StyledColorBox = styled.div<{ color: string }>`
  width: 100px;
  height: 100px;
  margin-top: 3px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
`;
