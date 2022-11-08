import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Spinner from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,

  parameters: {
    componentSubtitle: "로딩 스피너 컴포넌트 입니다.",
    viewMode: "docs",
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <StyledWrapper>
    <Spinner size={args.size} />
  </StyledWrapper>
);

export const Example = Template.bind({});

Example.args = {
  size: 5,
};
const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
