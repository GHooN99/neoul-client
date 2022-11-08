import styled from "styled-components";
import { Button } from "@components/Button";
import { useToast } from "@hooks/useToast";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Toast from "./Toast";
import ToastProvider from "./Toast.provider";

export default {
  title: "Components/Toast",
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    componentSubtitle: "공통 토스트 컴포넌트 입니다.",
    viewMode: "docs",
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = ({ ...args }) => {
  const openToast = useToast();

  return (
    <StyledWrapper>
      <Button onClick={() => openToast(args.message)}>토스트 팝업 열기</Button>
    </StyledWrapper>
  );
};

export const Example = Template.bind({});

Example.args = {
  message: "✅ 컨트롤탭을 이용해 메시지를 수정해보세요.",
};

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
`;
