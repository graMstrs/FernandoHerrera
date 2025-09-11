import type { GiphyRandomResponse } from "../data/giphy.random.response";

const API_KEY = 'hcof8GrdL6UaOklZt0Mikk5WAt3uomBo'

const createImageInsideDOM = (url: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;
    document.body.append(imageElement);
}

const getRandomGifUrl = async(): Promise<string> => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag&rating=g`
    );
 
    const { data } : GiphyRandomResponse = await response.json();

    return data.images.original.url;
}

getRandomGifUrl().then( createImageInsideDOM );
