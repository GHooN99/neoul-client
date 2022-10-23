import type { ReactNode } from "react";

export interface PortalProps {
  /**
   * 포탈 DOM 엘리먼트의 ID 값입니다.
   */
  id?: string;
  children: ReactNode;
}
