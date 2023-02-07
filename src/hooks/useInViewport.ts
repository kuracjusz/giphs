import { RefObject, useEffect, useMemo, useState } from "react";

function useInViewport(ref: RefObject<HTMLImageElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    if (ref.current !== null) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, observer]);

  return isIntersecting;
}

export default useInViewport;
