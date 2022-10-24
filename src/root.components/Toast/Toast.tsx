import { useState } from "react";
import { Portal } from "@components/Portal";
import { StyledMask, StyledModalWrapper } from "./Toast.styled";
import type { SnackbarProps } from "./Toast.types";

/**
 * 공통 스낵바 컴포넌트입니다.
 * 모달의 렌더링 여부는 `useSnackbar` 커스텀 훅을 사용해 외부에서 제어합니다.
 * @example ```ts
  const [openSnackBar] = useSnackBar("message");
  
```
 */
const Toast = ({ id, message }: SnackbarProps) => {
  const [close, setClose] = useState(false);

  return <Portal id={id}>s</Portal>;
};

export default Toast;
