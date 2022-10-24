import { useContext } from "react";
import { ToastContext } from "@components/Toast";

type UseToastHookResult = () => void;

/**
 * useToast Hook
 * 토스트 컴포넌트를 보여주는 함수를 반환합니다.
 *
 *
 * ToastProvider 내부의 컴포넌트에서 호출 가능합니다
 * @example
 * ```tsx
 *   const openToast = useToast("message");
 * ```
 */
export const useToast = (message: string): UseToastHookResult => {
  const contextValue = useContext(ToastContext);

  if (contextValue === null) {
    throw new Error("ToastProvider 내부에서 호출해주세요!!");
  }

  const { openToast } = contextValue;

  return () => openToast(message);
};
