import { useState } from "react";

type UseModalHookResult = [boolean, () => void, () => void];

/**
 * ### useModal 커스텀 훅 
 * 
 * 모달을 열고 닫는 핸들러 함수, 모달의 열림 상태를 반환하는 커스텀 훅입니다.
 * 
 * @example ```tsx
 *  const [isOpen, openModal, closeModal] = useModal();
 *  ...
 *  <Button onClick={openModal}>모달 오픈</Button>
      {isOpen && <Modal onClose={closeModal} />
 * ``` 
 */
export const useModal = (): UseModalHookResult => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};
