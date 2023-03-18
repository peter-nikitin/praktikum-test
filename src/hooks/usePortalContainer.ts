import { useEffect, useRef, type RefObject } from "react";

export const usePortalContainer = (
  rootRef?: RefObject<HTMLElement>
): HTMLDivElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mountPoint = rootRef?.current ?? document.body;

  const getContainer = () => {
    if (ref.current === null) {
      ref.current = document.createElement("div");
    }

    return ref.current;
  };

  useEffect(() => {
    if (ref.current !== null) {
      mountPoint.appendChild(ref.current);
    }

    return () => {
      ref.current?.remove();
    };
  }, [mountPoint]);

  return getContainer();
};
