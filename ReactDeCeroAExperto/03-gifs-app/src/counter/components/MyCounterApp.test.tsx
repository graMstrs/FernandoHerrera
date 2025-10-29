import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe('MyCounterApp', () => {

    test('Should render the component',() => {
        render(<MyCounterApp />)

        screen.debug();
        
        expect(screen.getByRole('heading', { level: 1 }).innerHTML.trim())
        .toBe('Counter: 10')

        expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
        expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
        expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();
    });

    test ('Should increment the counter', () => {
        render(<MyCounterApp />)

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click( button );

        expect(labelH1.innerHTML.trim()).toBe('Counter: 11');
    });

    test ('Should decrement the counter', () => {
        render(<MyCounterApp />)

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '-1' });

        fireEvent.click( button );

        expect(labelH1.innerHTML.trim()).toBe('Counter: 9');
    });

    test ('Should decrement the counter', () => {
        render(<MyCounterApp />)

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '-1' });

        fireEvent.click( button );

        expect(labelH1.innerHTML.trim()).toBe('Counter: 9');
    });

    test ('Should reset the counter', () => {
        render(<MyCounterApp />)

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: 'Reset' });

        fireEvent.click( button );

        expect(labelH1.innerHTML.trim()).toBe('Counter: 0');
    });

});