import AxiosMockAdapter from 'axios-mock-adapter';
import { beforeEach, describe, expect, test } from "vitest";

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from '../api/giphy.api';

import { giphySearchResponseMock } from "../../tests/mock/giphy.response.data";


describe ('getGifsByQuery', () => {
    let mock  = new AxiosMockAdapter(giphyApi);

    beforeEach(() => {
        //mock.reset();
        mock = new AxiosMockAdapter(giphyApi);
    });
    
    // test('Should return a list of gifs', async() => {

    //     const gifs = await getGifsByQuery('One Punch');
    //     const [gif1] = gifs;

    //     expect(gifs.length).toBe(10);

    //     expect(gif1).toEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number)
    //     });
        

    test('Should return a list of gifs', async () =>{
        
        mock.onGet('/search').reply(200, giphySearchResponseMock);
        const gifs = await getGifsByQuery('One Punch');

        expect(gifs.length).toBe(10);

        gifs.forEach( (gif) => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string')
            expect(typeof gif.url).toBe('string')
            expect(typeof gif.width).toBe('number')
            expect(typeof gif.height).toBe('number')

        });
    });

    test('Should return an empty list of query is empty', async () =>{
        //mock.onGet('/search').reply(200, giphySearchResponseMock);
        mock.restore();
        const gifs = await getGifsByQuery('');

        expect(gifs.length).toBe(0);

    });

    test('Should handle error when the API returns an error', async ()=>{
        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request',
            },
        });

        const gifs = await getGifsByQuery('One Punch');
        
        expect(gifs.length).toBe(0);

    });
});