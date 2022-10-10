import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Testing GifGrid component', () => {

    const category = 'Breaking Bad';

    test('H3 should have category name', () => {

        render( <GifGrid category={ category }/> );
        expect( screen.getByRole('heading', { level: 3 }).textContent ).toBe( category )

    });

});