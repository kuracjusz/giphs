import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import GifList from "./components/GifList";
import Search from "./components/Search";
import { getGifsRequest } from "./connectors/api";
import { GifType } from "./types/GifTypes";

function App() {
  const [gifs, setGifs] = useState<GifType[]>([]);

  const getGifs = async () => {
    const response = await getGifsRequest.get();
    const requestedG = await response.json();
    setGifs((p) => [...p, ...requestedG.data]);
    getGifsRequest.nextGifs();
  };

  useEffect(() => {
    getGifs();
  }, []);

  const getStringGifs = async (searchQuery: string) => {
    getGifsRequest.query(searchQuery);

    const response = await getGifsRequest.get();
    const requestedG = await response.json();

    getGifsRequest.nextGifs();

    setGifs(requestedG.data);
  };

  return (
    <div className="App">
      <Search getStringGifs={getStringGifs} />
      <GifList getGifs={getGifs} gifs={gifs} />
    </div>
  );
}

export default App;
