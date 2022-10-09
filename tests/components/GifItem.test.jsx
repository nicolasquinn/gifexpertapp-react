import { getByRole, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Testing GifItem component', () => {

    const title = 'Just a title';
    const url = 'https://arandomurl.com/'

    test('Snapshot should match', () => {

        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('Must show the image with the correct URL and ALT text', () => {

        render( <GifItem title={ title } url={ url } /> );

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { alt, src } = screen.getByRole('img');
        expect( alt ).toBe( title );
        expect( src ).toBe( url );

    });

    test('Property "title" must be into the component as a text', () => {

        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText(title) ).toBeTruthy();

    });

})