import { useEffect, useState } from "react";
import { Portal } from "@components/Portal";
import { StyledToastWrapper } from "./Toast.styled";
import type { ToastProps } from "./Toast.types";

/**
 * 토스트 오픈 초 (ms)
 */
export const TOAST_OPEN_SECOND = 1500;

/**
 * 공통 토스트 컴포넌트입니다.
 * 토스트의 렌더링 여부는 `useToast` 커스텀 훅을 사용해 외부에서 제어합니다.
 * @example ```tsx
  const openToast = useToast("message");
  ...
  <Button onClick={openToast}>Click</Button>
```
 */
const Toast = ({ message, onToastClose }: ToastProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsClosing(true);
    }, TOAST_OPEN_SECOND);
  }, []);

  const handleAnimationEnd = () => {
    if (isClosing) {
      onToastClose();
    }
  };

  return (
    <Portal id="Toast">
      <StyledToastWrapper
        onAnimationEnd={handleAnimationEnd}
        isClosing={isClosing}
      >
        <span className="toast-message">{message}</span>
      </StyledToastWrapper>
    </Portal>
  );
};

export default Toast;
