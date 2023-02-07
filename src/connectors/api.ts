const URL = `https://api.giphy.com/v1/gifs/search?`;

export const queryParams = {
  q: "undefined",
  lang: "en",
  offset: "0",
  limit: "5",
  api_key: "z3TCxWMXI3poet0DNQBeC8RfYrprX7U1",
};

export function get({
  url = URL,
  params,
}: {
  url?: string;
  params?: Partial<typeof queryParams>;
}) {
  return fetch(url + new URLSearchParams({ ...queryParams, ...params }));
}

export const getGifsRequest = (() => {
  let queryString = queryParams.q;
  let offsetState = Number(queryParams.offset);

  return {
    query: (query: string) => {
      offsetState = 0;
      queryString = query;
    },
    nextGifs: (offsetS: number = 5) => (offsetState += offsetS),
    get: () => {
      return get({
        params: { offset: `${offsetState}`, q: queryString },
      });
    },
  };
})();
