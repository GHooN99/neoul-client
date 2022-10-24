import { createContext, useState } from "react";
import Toast from "./Toast";
import type {
  ToastContextValue,
  ToastProviderProps,
  ToastState,
} from "./Toast.types";

export const ToastContext = createContext<ToastContextValue | null>(null);

/**
 * 토스트 팝업을 제어하는 provider 컴포넌트입니다.
 * 토스트의 렌더링 여부는 `useToast` 커스텀 훅을 사용해 외부에서 제어합니다.
 * @example ```tsx
  const openToast = useToast("message");
  ...
  <Button onClick={openToast}>Click</Button>
```
 */
const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toastState, setToastState] = useState<ToastState>({
    open: false,
    message: "",
  });

  const handleToastClose = () => {
    setToastState({
      open: false,
      message: "",
    });
  };

  const openToast = (message: string) => {
    setToastState({
      open: true,
      message,
    });
  };

  return (
    <ToastContext.Provider value={{ openToast }}>
      {toastState.open && (
        <Toast onToastClose={handleToastClose} message={toastState.message} />
      )}
      {children}
    </ToastContext.Provider>
  );
};
export default ToastProvider;
