import Gif from "./Gif";
import { GifType } from "../types/GifTypes";

type GifListProps = { getGifs: () => void; gifs: GifType[] };

function GifList({ gifs, getGifs }: GifListProps) {
  return (
    <>
      {gifs.length > 0 ? (
        gifs.map((gif, index) => (
          <Gif
            getGifs={getGifs}
            key={gif.id + index}
            images={gif.images}
            title={gif.title}
            lastGif={gifs.length - 1}
            id={index + 1}
          />
        ))
      ) : (
        <div>
          <h1>no gifs</h1>
        </div>
      )}
    </>
  );
}

export default GifList;
