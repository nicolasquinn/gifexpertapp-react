import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing AddCategory component', () => {

    test('Text input should change when writing something', () => {

        
        render( <AddCategory onAddCategory={ () => {} } /> ); // required prop type func.
        const txtInput = screen.getByRole('textbox');

        fireEvent.input( txtInput, { target: { value: 'Something' } } );
        expect( txtInput.value ).toBe('Something');

    })

});