import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { useCounter } from "../hooks/useCounter";


const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();


vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 30,
        handleAdd: handleAddMock,
        handleReset: handleResetMock,
        handleSubstract: handleSubstractMock,
    })
}));

describe('MyCounterApp2', () => {

    test('Should render the conponent',() => {
        render(<MyCounterApp/>);

        expect( screen.getByRole('heading', {level: 1}).innerHTML.trim())
        .toContain('Counter: 30');

        expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
        expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
        expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();

    });

    test('Should call handleAdd if button is clicked',() => {
        render(< MyCounterApp />);
        const button = screen.getByRole('button', {name: '+1'});
        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleSubstractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
        
    });

    test('Should call handleSubstract if button is clicked',() => {
        render(<MyCounterApp />);

        const button = screen.getByRole('button', {name: '-1'});

        fireEvent.click( button );

        expect(handleSubstractMock).toHaveBeenCalled();
        expect(handleSubstractMock).toHaveBeenCalledTimes(1);

    });

    test('Should call handleReset if button is clicked',() => {
        render(<MyCounterApp/>);

        const button = screen.getByRole('button', {name: 'Reset'});

        fireEvent.click( button );

        expect(handleResetMock).toHaveBeenCalled();
        expect(handleResetMock).toHaveBeenCalledTimes(1);
    });
    
})