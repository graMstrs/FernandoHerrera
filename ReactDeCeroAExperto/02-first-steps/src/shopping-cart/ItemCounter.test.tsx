import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
    test('Should render with default values', () =>{
        render(<ItemCounter item="Test Item" quantity={0} />)

        expect(screen.getByText('Test Item')).toBeDefined();
        
    });

    test('Should render with custom quantity', () =>{
        const name = "control de nintendos"
        const quantity = 10

        render(<ItemCounter item={name}  quantity={ quantity } />);

        expect (screen.getByText(name)).toBeDefined()        
    });

    test('Should increase quantity when button + is pressed', () =>{
        render(<ItemCounter item={'Test Item'}  quantity={ 0 } />);   

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click( buttonAdd)

        expect( screen.getByText('1')).toBeDefined();

    });

    test('Should decrease quantity when button - is pressed', () =>{
        render(<ItemCounter item={'Test Item'}  quantity={ 5 } />);   

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click( buttonSubtract)

        expect( screen.getByText('4')).toBeDefined();

    });

    test('Should not decrease quantity when button - is pressed and quantity is 0', () =>{
        render(<ItemCounter item={'Test Item'}  quantity={ 0 } />);   

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click( buttonSubtract)

        expect( screen.getByText('0')).toBeDefined();

    });

    test('Should color red when quantity is 0', () =>{
        const quantity = 0
        const item = 'Test Item'

        render(<ItemCounter item={item} quantity={ quantity } />);   
        
        const itemText = screen.getByText(item);
        
        expect( itemText.style.color).toBe('red');

    });


     test('Should color black when quantity is greater than 0', () =>{
        const quantity = 1
        const item = 'Test Item'

        render(<ItemCounter item={item} quantity={ quantity } />);   
        
        const itemText = screen.getByText(item);
        
        expect( itemText.style.color).toBe('black');
        
    });


});