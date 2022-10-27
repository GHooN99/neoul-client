import { useState } from "react";
import styled from "styled-components";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Modal } from "@components/Modal";
import { Typography } from "@components/Typography";
import { useModal } from "@hooks/useModal";
import { useToast } from "@hooks/useToast";

const ScreenTodo = () => {
  const delay = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, openModal, closeModal] = useModal();
  const [isEditOpen, openEditModal, closeEditModal] = useModal();
  const openSuccessToast = useToast("✅ 성공적으로 수정되었습니다.");
  const openFailToast = useToast("⚠️ 문제가 발생했습니다. 다시시도해주세요.");

  const handleClick = async () => {
    setIsLoading(true);
    await delay();
    setIsLoading(false);
  };

  console.log(isOpen);

  return (
    <div style={{ height: 100, padding: "0 20px" }}>
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
        <Button
          onClick={handleClick}
          loading={isLoading}
          fullWidth
          color="main"
        >
          로그인
        </Button>
        <Button fullWidth color="red" onClick={openModal}>
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
        <Button fullWidth color="white" onClick={openEditModal}>
          수정 모달 오픈
        </Button>
        {isEditOpen && (
          <Modal
            onConfirm={handleClick}
            loading={isLoading}
            title="이 기록을 수정할까요?"
            description={`기존의 기록은 수정된 기록으로 대체됩니다. 그래도 수정할까요?`}
            cancelText="취소"
            confirmText="수정"
            onClose={closeEditModal}
          />
        )}
        <Button fullWidth onClick={openSuccessToast}>
          성공 메시지 토스트 오픈
        </Button>
        <Button fullWidth color="red" onClick={openFailToast}>
          실패 메시지 토스트 오픈
        </Button>

        <Typography variant="h2">Typography h2</Typography>
        <Typography variant="h3" weight="lighter" align="center">
          Typography h3
        </Typography>
        <Typography variant="h3">Typography h3</Typography>
        <Typography variant="p">Typography p</Typography>
        <Typography variant="main">Typography main </Typography>
        <div>
          <Typography variant="sub1">Typography sub1</Typography>
        </div>
        <Typography variant="sub2">Typography sub2</Typography>
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
