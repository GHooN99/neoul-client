import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import type { PortalProps } from "./Portal.types";

const Portal = ({ id, children }: PortalProps) => {
  const portalDOMRef = useRef<HTMLDivElement | null>(null);
  const [isPortalMounted, setIsPortalMounted] = useState(false);

  // 동적으로 노드 생성
  useEffect(() => {
    const element = document.createElement("div");
    element.id = id ?? "portal";
    document.body.appendChild(element);
    portalDOMRef.current = element;
    setIsPortalMounted(true);

    return () => {
      if (!portalDOMRef.current) return;

      const mountedElement = portalDOMRef.current;
      if (!mountedElement.parentElement)
        throw new Error("포탈 element 의 부모를 찾을 수 없습니다!");

      mountedElement.parentElement.removeChild(mountedElement);
      portalDOMRef.current = null;
      setIsPortalMounted(false);
    };
  }, [id]);

  if (!isPortalMounted) return null;
  if (!portalDOMRef.current) return null;
  // 포탈 생성
  return createPortal(children, portalDOMRef.current);
};

export default Portal;
