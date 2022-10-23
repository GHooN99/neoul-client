interface BaseModalProps {
  /**
   * 모달이 열릴때 포탈 DOM 엘리먼트의 ID 값입니다.
   */
  id?: string;
  /**
   * 모달에서 확인 버튼을 눌렀을때의 동작입니다.
   */
  onConfirm: () => void | Promise<void>;
  /**
   * onConfirm 로직이 비동기일시 확인 버튼의 로딩 상태를 나타냅니다.
   */
  loading?: boolean;
  /**
   * 모달의 성공,확인 버튼에 해당하는 텍스트입니다.
   * @defaultValue "확인"
   */
  confirmText?: string;
  /**
   * 모달의 취소,돌아가기 버튼에 해당하는 텍스트입니다.
   * @defaultValue "취소"
   */
  cancelText?: string;

  /**
   * 모달의 취소버튼, 닫힐때의 동작입니다.
   */
  onClose: () => void;
  /**
   * 모달의 동작이 파괴적인 행동인 경우 사용합니다. 확인 버튼이 경고를 나타내는 빨강색으로 변합니다.
   */
  destructive?: boolean;
  /**
   * 모달의 상단 제목에 해당하는 텍스트입니다.
   */
  title: string;
  /**
   * 모달 내부의 안내 메시지 텍스트입니다.
   */
  description: string;
}

export interface ModalProps extends BaseModalProps {}
