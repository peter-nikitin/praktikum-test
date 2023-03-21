import { useEffect, useState } from "react";

type useIntersectionArgs = {
  observingElement: Element | null;
};

export const useIntersection = ({ observingElement }: useIntersectionArgs) => {
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = { root: null, rootMargin: "0px", threshold: 1.0 };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (observingElement) {
      observer.observe(observingElement);
    }

    return () => {
      if (observingElement) {
        observer.unobserve(observingElement);
      }
    };
  }, [observingElement, options]);

  return { isVisible };
};
