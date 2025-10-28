import { describe, test, expect, beforeEach } from "vitest";
import { act, render, renderHook, screen } from "@testing-library/react";
import { useCounter } from "./useCounter";


describe('useCounter', () => {
    // let result;
    // beforeEach(() => {
    //     const { result:hookValue } = renderHook(() => useCounter( ));
    //     result = hookValue;
    // });
    
    
    test('Should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter( ));
        expect(result.current.counter).toBe(10);
    });

    test('Should initialize with value of 20', () => {
        const initialValue = 20;
        const { result } = renderHook(() => useCounter( initialValue));
        expect(result.current.counter).toBe(initialValue);
    });

    test('Should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());
        
        act(() => {
            result.current.handleAdd();
        }); 
        
        expect(result.current.counter).toBe(11)
    
    });

    test('Should decrement counter when handleSubstract is called', () => {
        const { result } = renderHook(() => useCounter());
        
        act(() => {
            result.current.handleSubstract();
        }); 

        expect(result.current.counter).toBe(9)
    });

    test('Should restart counter to 0 when handleReset is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleReset();
        }); 

        expect(result.current.counter).toBe(0)
    });

});