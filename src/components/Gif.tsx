import { useEffect, useRef, useState } from "react";
import useInViewport from "../hooks/useInViewport";
import { GifType } from "../types/GifTypes";

type GifProps = Pick<GifType, "images" | "title"> & {
  id: number;
  lastGif: number;
  getGifs: () => void;
};

function Gif({ id, images, title, lastGif, getGifs }: GifProps) {
  const gifRef = useRef<HTMLImageElement>(null);
  const isInViewport = useInViewport(gifRef);
  const [loadNewVideo, setLoadNewVideo] = useState(lastGif);

  if (isInViewport) {
    if (loadNewVideo === Number(gifRef.current?.id)) {
      setLoadNewVideo((p) => p + 4);
      getGifs();
    }
  }

  return (
    <div>
      <img
        style={{ width: Number(images.fixed_width.width) * 2 }}
        src={images.fixed_width.url}
        alt={title}
        ref={gifRef}
        id={`${id}`}
      />
    </div>
  );
}

export default Gif;
