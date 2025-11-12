import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import useGifs from "./useGifs";
import * as gifActions from '../actions/get-gifs-by-query.action';

describe ('useGifs', () => {
    test('Should return default values and methods', () =>{
        const { result } = renderHook(() => useGifs()); 

        // Propiedades del archivo useGifs.tsx
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);

        // Metodos del archivo useGifs.tsx
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();

    });

    test('Should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs()); 
    
        await act(async () => {
            await result.current.handleSearch('goku');
        });

        expect(result.current.gifs.length).toBe(10);
        
    });
    
    test('Should return a list of gifs when handleTermClicked is called', async() => {
        const { result } = renderHook(() => useGifs());
        
        await act (async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);
    })

    test('Should return a list of gifs from cache when handleTermClicked is called', async() => {
        const { result } = renderHook(() => useGifs());
        
        await act (async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifActions, 'getGifsByQuery')
        .mockRejectedValue(new Error('This is my custom error'));

        await act (async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);

    })

    test('Should return not more thatn 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifActions, 'getGifsByQuery')
        .mockResolvedValue([]);

        await act(async () => {
            await result.current.handleSearch('goku1');
        });
         await act(async () => {
            await result.current.handleSearch('goku2');
        });
         await act(async () => {
            await result.current.handleSearch('goku3');
        });
         await act(async () => {
            await result.current.handleSearch('goku4');
        });
         await act(async () => {
            await result.current.handleSearch('goku5');
        });
         await act(async () => {
            await result.current.handleSearch('goku6');
        });
         await act(async () => {
            await result.current.handleSearch('goku7');
        });
         await act(async () => {
            await result.current.handleSearch('goku8');
        });
         await act(async () => {
            await result.current.handleSearch('goku9');
        });

        expect (result.current.previousTerms.length).toBe(5);

        //Confirm that the terms are the last 5 searched
        expect (result.current.previousTerms).toStrictEqual(
            [ 'goku9', 'goku8', 'goku7', 'goku6', 'goku5' ]
        );

    });

}); 