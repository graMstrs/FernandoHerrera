import type { GiphyRandomResponse } from "../data/giphy.random.response";

const API_KEY = 'hcof8GrdL6UaOklZt0Mikk5WAt3uomBo'

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag&rating=g`
);


const createImageInsideDOM = (url: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;

    document.body.append(imageElement);
}


myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl); 
    })
    .catch(err => {
        console.error(err);
    });