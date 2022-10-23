interface BaseModalProps {
  id?: string;
  onConfirm: () => void | Promise<void>;
  loading?: boolean;
  confirmText?: string;
  cancelText?: string;
  onClose: () => void;
  destructive?: boolean;
  title: string;
  description: string;
}

export interface ModalProps extends BaseModalProps {}
