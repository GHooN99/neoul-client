import { useState } from "react";

type useBooleanHookResult = {
  /**
   * boolean 상태 값입니다.
   */
  value: boolean;
  /**
   * 상태를 토글 할 수 있는 함수입니다.
   */
  toggle: () => void;
  /**
   * 상태를 true 로 바꾸는 함수입니다.
   */
  setTrue: () => void;
  /**
   * 상태를 false 로 바꾸는 함수입니다.
   */
  setFalse: () => void;
};

/**
 * #### useBoolean 커스텀 훅
 * boolean 값 상태를 쉽게 제어할 수 있는 커스텀 훅입니다.
 * @example ```tsx
 *  const {value , toggle} = useBoolean(false);
 * ...
 *  <Button onClick={toggle}>토글</Button>
 * ```
 *
 */
export const useBoolean = (initialValue: boolean): useBooleanHookResult => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
};
