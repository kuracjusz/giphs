import { useEffect, useState } from "react";

// const useRequest = () => {
//   const [requestData, setRequestData] = useState<GifType[]>([]);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;
//     get({ url: `https://api.giphy.com/v1/gifs/search?`, signal })
//       .then((response) => response.json())
//       .then((responseData) => setRequestData(responseData.data))
//       .catch((err) => {
//         if (err.name === "AbortError") {
//           console.log("req is cancelled");
//         } else {
//           console.log(err);
//         }
//       });
//     return () => controller.abort();
//   }, []);

//   return { requestData };
// };

// export default useRequest;
