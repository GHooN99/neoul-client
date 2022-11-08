import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,

  parameters: {
    componentSubtitle: "공통 인풋 컴포넌트 입니다.",
    viewMode: "docs",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <StyledWrapper>
    <Input style={{ marginBottom: 20 }} placeholder="FULL WIDTH" fullWidth />
    <Input
      {...args}
      placeholder="컨트롤탭을 이용해 이 요소를 테스트 해보세요"
    />

    <Input hasError errorMessage="에러메시지가 존재할 때" />
  </StyledWrapper>
);

export const Example = Template.bind({});

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  & > :not(:last-child) {
    margin-right: 30px;
  }
`;
