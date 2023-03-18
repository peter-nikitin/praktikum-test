import { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = (
  elements: Array<Element | HTMLElement | null>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      for (const el of elements) {
        if (el?.contains((event?.target as Node) || null)) {
          return true;
        }
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [elements, handler]);
};
