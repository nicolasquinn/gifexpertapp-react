import { fireEvent, getAllByRole, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Testing GifExpertApp component', () => {

    test('Should not search and show the same category if already exists', () => {

        render( <GifExpertApp /> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Better Call Saul' } } );
        fireEvent.submit( form );

        expect( screen.getAllByText('Better Call Saul').length ).toBe(1)


    });
    
    test('Should show a new category if this does not exists already', () => {

        render( <GifExpertApp /> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Idk' } } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(2);

    });

    test('Should do the iteration when category is loaded', async () => {

        render( <GifExpertApp /> )

        await waitFor( () => expect( screen.getAllByRole('img').length ).toBeGreaterThan(0) );

        expect( screen.getAllByRole('img').length ).toBeGreaterThan(0);

    });

});