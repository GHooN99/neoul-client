import { useState } from "react";
import styled from "styled-components";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Modal } from "@components/Modal";
import { useModal } from "@hooks/useModal";
import { useTodosQuery } from "../hooks/useTodosQuery";

const ScreenTodo = () => {
  const delay = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, openModal, closeModal] = useModal();
  const [isEditOpen, openEditModal, closeEditModal] = useModal();

  const handleClick = async () => {
    setIsLoading(true);
    await delay();
    setIsLoading(false);
  };

  console.log(isOpen);

  return (
    <div style={{ height: 100, padding: "0 20px" }}>
      <Button onClick={handleClick} loading={isLoading} fullWidth color="main">
        로그인
      </Button>

      <Button style={{ width: 300 }} disabled color="gray">
        disabled
      </Button>
      <Button style={{ width: 300 }} color="white">
        수정하기
      </Button>
      <Button style={{ width: 100 }} size="small" color="white">
        취소
      </Button>
      <Button style={{ width: 100 }} size="small" color="red">
        삭제
      </Button>
      <StyledWrapper>
        <Input
          className="classNamehi"
          fullWidth
          hasError={true}
          errorMessage="올바른 이메일 형식을 입력해주세요."
        />
        <Input
          style={{ marginBottom: 20 }}
          fullWidth
          hasError={true}
          errorMessage="마진 바텀"
        />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="이메일"
          type="email"
          fullWidth
        />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="비밀번호 (8자 이상)"
          type="password"
          fullWidth
        />

        <Button fullWidth onClick={openModal}>
          삭제 모달 오픈
        </Button>
        {isOpen && (
          <Modal
            onConfirm={handleClick}
            loading={isLoading}
            title="이 기록을 삭제할까요?"
            description={`삭제하면 복구할 수 없습니다.
          그래도 삭제할까요?`}
            destructive
            cancelText="취소"
            confirmText="삭제"
            onClose={closeModal}
          />
        )}
        <Button fullWidth onClick={openEditModal}>
          수정 모달 오픈
        </Button>
        {isEditOpen && (
          <Modal
            onConfirm={handleClick}
            loading={isLoading}
            title="이 기록을 수정할까요?"
            description={`기존의 기록은 수정된 기록으로 대체됩니다.
            그래도 수정할까요?`}
            cancelText="취소"
            confirmText="수정"
            onClose={closeEditModal}
          />
        )}
      </StyledWrapper>
    </div>
  );
};

export default ScreenTodo;

const StyledWrapper = styled.div`
  .classNamehi {
    margin-bottom: 50px;
  }
`;
