import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    componentSubtitle: "공통 버튼 컴포넌트 입니다.",
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: "docs",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StyledWrapper>
    <Button color="main" {...args}>
      {args.children}
    </Button>
    <Button disabled {...args}>
      {args.children}
    </Button>
    <Button color="red" {...args}>
      {args.children}
    </Button>
    <Button color="white">안녕! 나는 버튼!</Button>
  </StyledWrapper>
);

export const Primary = Template.bind({});

Primary.args = {
  children: "확인",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
};

export const Text = Template.bind({});
Text.args = {
  children: "설정",
};

const StyledWrapper = styled.div`
  display: flex;
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;
