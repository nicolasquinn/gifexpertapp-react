import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { getGifs } from "../../src/helpers/getGifs";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs"); // create mock

describe('Testing GifGrid component', () => {

    const category = 'Breaking Bad';

    test('Should show Loading... message into an H2 when isLoading is true', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category }/> );

        expect( screen.getByRole('heading', { level: 2 }).textContent ).toBe('Loading...');

    });

    
    test('H3 should have category name', () => {

        render( <GifGrid category={ category }/> );
        expect( screen.getByRole('heading', { level: 3 }).textContent ).toBe( category )

    });

    test('Should show items when function useFetchGifs is called', () => {

        const gifs = [
            {
                id: 'asd123',
                title: 'Better Call Saul',
                url: 'https://justaurl.com/'
            },
            {
                id: 'qwe987',
                title: 'Breaking Bad',
                url: 'https://justanotherrndomurl.com/'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category }/> );

        expect( screen.getAllByRole('img').length ).toBe(2);

    });

});