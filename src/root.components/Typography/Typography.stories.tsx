import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,

  parameters: {
    componentSubtitle: "공통 텍스트 타이포그래피 컴포넌트 입니다.",
    viewMode: "docs",
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <StyledWrapper>
    <Typography {...args}>{args.children}</Typography>
    <Typography variant="h2">h2 text</Typography>
    <Typography variant="h3">h3 text</Typography>
    <Typography variant="p">p text</Typography>
    <Typography variant="main">main text</Typography>
    <Typography variant="sub1">sub1 text</Typography>
    <Typography variant="sub2">sub2 text</Typography>
  </StyledWrapper>
);

export const Example = Template.bind({});

Example.args = {
  children: "컨트롤 탭을 이용해 텍스트를 테스트 해보세요.",
  align: "left",
  weight: "normal",
  variant: "h2",
};

const StyledWrapper = styled.div`
  /* display: flex; */
  width: 100%;
  /* flex-wrap: wrap; */
  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`;
