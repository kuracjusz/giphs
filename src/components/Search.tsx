import { ChangeEvent, MouseEvent, useState } from "react";

type SearchProps = { getStringGifs: (q: string) => void };

function Search({ getStringGifs }: SearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleButton = () => {
    if (inputValue === "") {
      getStringGifs("undefined");
    } else {
      getStringGifs(inputValue);
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={handleInput} type="text" />
      <button onClick={handleButton}>query</button>
    </div>
  );
}

export default Search;
