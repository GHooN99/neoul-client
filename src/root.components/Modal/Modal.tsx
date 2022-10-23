import { useState } from "react";
import { Button } from "@components/Button";
import { Portal } from "@components/Portal";
import { StyledMask, StyledModalWrapper } from "./Modal.styled";
import type { ModalProps } from "./Modal.types";

/**
 * 공통 모달 컴포넌트입니다.
 * 모달의 렌더링 여부는 `useModal` 커스텀 훅을 사용해 외부에서 제어합니다.
 * @example ```ts
  const [isOpen,openModal,closeModal] = useModal();
  ...
  return isOpen && <Modal onClose={closeModal} />
 ```
 */
const Modal = ({
  id,
  onConfirm,
  onClose,
  loading = false,
  destructive = false,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
}: ModalProps) => {
  const [close, setClose] = useState(false);

  const handleModalClose = () => {
    setClose(true);
  };

  const handleConfirm = async () => {
    await onConfirm();
    handleModalClose();
  };

  const handleAnimationEnd = () => {
    if (close) {
      onClose();
    }
  };

  return (
    <Portal id={id}>
      <StyledMask close={close} onAnimationEnd={handleAnimationEnd}>
        <StyledModalWrapper close={close}>
          <div className="modal-content">
            <h3 className="modal-title">{title}</h3>
            <p className="modal-body">{description}</p>
            <div className="button-group">
              <Button
                fullWidth
                color="white"
                size="small"
                onClick={handleModalClose}
              >
                {cancelText}
              </Button>
              <Button
                fullWidth
                color={destructive ? "red" : "main"}
                size="small"
                loading={loading}
                onClick={handleConfirm}
              >
                {confirmText}
              </Button>
            </div>
          </div>
        </StyledModalWrapper>
      </StyledMask>
    </Portal>
  );
};

export default Modal;
