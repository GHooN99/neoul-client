interface BaseSnackbarProps {
  /**
   * 스낵바가 열릴때 포탈 DOM 엘리먼트의 ID 값입니다.
   */
  id?: string;
  /**
   * 스낵바 내부의 메시지 텍스트입니다.
   */
  message: string;
}

export interface SnackbarProps extends BaseSnackbarProps {}
