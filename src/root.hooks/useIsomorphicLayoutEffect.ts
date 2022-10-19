import { useEffect, useLayoutEffect } from "react";

/**
 * NextJS useLayoutEffect SSR ISSUE
 * @from https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
 * @see https://reactjs.org/link/uselayouteffect-ssr
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
