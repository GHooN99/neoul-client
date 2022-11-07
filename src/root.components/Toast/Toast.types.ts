import type { ReactNode } from "react";

interface BaseToastProps {
  /**
   * 토스트 내부의 메시지 텍스트입니다.
   */
  message: string;
  /**
   * 토스트가 닫힘을 나타냅니다.
   */
  onToastClose: () => void;
}

export interface ToastProps extends BaseToastProps {}

export type ToastState = {
  open: boolean;
  message: string;
};

export type ToastContextValue = {
  /**
   *  토스트 팝업을 여는 함수입니다.
   */
  openToast: (message: string) => void;
};
export interface ToastProviderProps {
  children: ReactNode;
}
