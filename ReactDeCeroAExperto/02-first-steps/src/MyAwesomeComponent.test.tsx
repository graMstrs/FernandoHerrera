import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';

import { MyAwesomeComponent } from "./MyAwesomeComponent";

describe ('MyAwesomeComponent', () => {

    test('should render first name and last name', () => {
        const {container} = render (<MyAwesomeComponent />);
        //screen.debug();
        //console.log(container.innerHTML);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        
        expect(h1?.innerHTML).toContain('Gerardo');
        expect(h3?.innerHTML).toContain('Tavera');
    }),

    test('should render first name and last name - screen', () => {
        render (<MyAwesomeComponent />);
        //screen.debug();
        //console.log(container.innerHTML);

        // const h1 = screen.getByRole('heading', {
        //     level: 1,
        // })

    }),
    
    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeComponent />);
        
        expect(container).toMatchSnapshot();
    });


});