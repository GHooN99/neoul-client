import styled from "styled-components";
import { Button } from "@components/Button";
import { useBoolean } from "@hooks/useBoolean";
import { useModal } from "@hooks/useModal";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "./Modal";

const delay = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
};

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    loading: {
      control: false,
    },
  },
  parameters: {
    componentSubtitle: "공통 모달 컴포넌트 입니다.",

    viewMode: "docs",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({
  onClose,
  onConfirm,
  ...args
}) => {
  const [isOpen, openModal, closeModal] = useModal();
  const {
    value: loading,
    setTrue: startLoading,
    setFalse: finishLoading,
  } = useBoolean(false);

  const handleConfirm = async () => {
    console.log("submit!");
    startLoading();
    await delay();
    finishLoading();
  };
  return (
    <StyledWrapper>
      <Button onClick={openModal}>모달 열기</Button>
      {isOpen && (
        <Modal
          loading={loading}
          onClose={closeModal}
          onConfirm={handleConfirm}
          {...args}
        />
      )}
    </StyledWrapper>
  );
};

export const Example = Template.bind({});

Example.args = {
  confirmText: "확인",
  cancelText: "취소",
  destructive: false,
  title: "모달 열었음",
  description: "컨트롤 탭에서 설명 텍스트를 입력해보세요",
};

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  & > :not(:last-child) {
    margin-right: 30px;
  }
`;
