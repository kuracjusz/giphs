import { render, screen } from "@testing-library/react";
import App from "./App";

import { describe, vi } from "vitest";
import { get, queryParams } from "./connectors/api";

import gifR from "./mockedGifs.json";

function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("App", () => {
  it("check if api works", () => {
    render(<App />);
    screen.debug();
  });
});

test("gifs", async () => {
  vi.fn().mockResolvedValue(createFetchResponse(gifR));

  (async () => {
    const response = await get({ params: queryParams });

    const gifs = await response.json();

    expect(vi.fn()).toHaveBeenCalledWith(
      "https://api.giphy.com/v1/gifs/search?" +
        new URLSearchParams({ ...queryParams })
    );

    expect(gifs).toStrictEqual(gifR);
  })();
});
