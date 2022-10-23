import { useState } from "react";

type UseModalHookResult = [boolean, () => void, () => void];

export const useModal = (): UseModalHookResult => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};
