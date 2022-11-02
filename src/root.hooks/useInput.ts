import { type ChangeEventHandler, useState } from "react";

type UseInputHookResult = [
  value: string,
  changeHandler: ChangeEventHandler<HTMLInputElement>,
  clearValue: () => void
];

/**
 * #### useInput 커스텀 훅
 * input 의 value, onChange 핸들러, value를 초기화 할 수 있는 값들을 반환합니다.
 * @example ```tsx
 *  const [password,setPassword,clearPassword] = useInput(initialValue);
 *  ...
 *  <Input value={password} onChange={setPassword} />
 * ```
 */
export const useInput = (initialValue = ""): UseInputHookResult => {
  const [value, setValue] = useState(initialValue);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value ?? "");
  };

  const clearValue = () => setValue("");

  return [value, changeHandler, clearValue];
};
