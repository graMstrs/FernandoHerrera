import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FirstStepsApp } from "./FirstStepsApp";


const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />;
});


vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),  
}));


describe('FirstStepsApp',() => {

    afterEach(() => {
        vi.clearAllMocks();
    });


    test('Should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    });

    test('Should render the correct number of ItemCounter components', () => {
        render (<FirstStepsApp />)
        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3);
        screen.debug();
    });

    test('Should render ItemCounter with correct props', () => {
        render (<FirstStepsApp />)
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        
        expect(mockItemCounter).toHaveBeenCalledWith(
            {item: 'Nintendo switch 2', quantity: 1 },
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            {item: 'Pro controller', quantity: 4 },
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            {item: 'Smash Bros', quantity: 3 },
        );
    });


});