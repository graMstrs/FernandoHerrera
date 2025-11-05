import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";

import AxiosMockAdapter from 'axios-mock-adapter';
import {giphyApi} from '../api/giphy/api'


describe ('getGifsByQuery', () => {

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
        

    test('Should return a list of gifs', async() =>{
        mock.OnGet('/search')
});