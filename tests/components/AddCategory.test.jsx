import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing AddCategory component', () => {

    const inputValue = 'Breaking Bad'

    test('Text input should change when writing something', () => {
 
        render( <AddCategory onAddCategory={ () => {} } /> ); // required prop type func.
        const txtInput = screen.getByRole('textbox');

        fireEvent.input( txtInput, { target: { value: inputValue } } );
        expect( txtInput.value ).toBe('Breaking Bad');

    })

    test('Should call onAddCategory function if input has text', () => {

        const onAddCategory = jest.fn(); // mock
        render( <AddCategory onAddCategory={ onAddCategory } /> );
        
        const txtInput = screen.getByRole('textbox');
        const form = screen.getByRole('form'); // aria-label in component for working.

        fireEvent.input( txtInput, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( txtInput.value ).toBe('');
        expect( onAddCategory ).toHaveBeenCalled();
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith( inputValue.trim() );


    });

    test('Should not call onAddCategory function if input is empty', () => {

        const onAddCategory = jest.fn();
        render( <AddCategory onAddCategory={ onAddCategory } /> );

        const txtInput = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( txtInput, { target: { value: 'a' } } );
        fireEvent.submit( form );

        expect( txtInput.value ).toBe('a');
        expect( onAddCategory ).not.toHaveBeenCalled();

    });

});