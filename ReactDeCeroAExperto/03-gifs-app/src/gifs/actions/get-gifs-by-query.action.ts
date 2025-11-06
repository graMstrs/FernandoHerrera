import { giphyApi } from "../api/giphy.api";

import type { GiphyRespone } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  // llamada clasica usando fetch
  /*
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=hcof8GrdL6UaOklZt0Mikk5WAt3uomBo&q=${query}&limit=10&lang=es`
      );
  */

  if (query.length === 0) return [];

  try {
    // llamada usando axios
    const response = await giphyApi<GiphyRespone>("/search", {
      params: {
        q: query,
        limit: 10,
      },
    });

    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
