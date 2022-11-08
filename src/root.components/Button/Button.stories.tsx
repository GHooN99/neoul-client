import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,

  parameters: {
    componentSubtitle: "공통 버튼 컴포넌트 입니다.",
    viewMode: "docs",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StyledWrapper>
    <Button style={{ marginBottom: 20 }} fullWidth>
      FULL Width
    </Button>
    <Button color="main" {...args}>
      {args.children}
    </Button>
    <Button color="red" size="small">
      작은 버튼
    </Button>
    <Button color="white">하얀 버튼</Button>
    <Button disabled>DISABLED</Button>
    <Button color="transparent">텍스트 버튼</Button>
    <Button color="red" loading>
      로딩
    </Button>
  </StyledWrapper>
);

export const Main = Template.bind({});

Main.args = {
  color: "main",
  children: "메인 버튼",
};

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;
