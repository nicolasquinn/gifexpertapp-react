import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Testing useFetchGifs hook', () => {

    const category = 'Breaking Bad';

    test('Should return the initial state', () => {

        const { result } = renderHook( () => useFetchGifs(category) );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Should return an images array and isLoading in false value', async () => {

        const { result } = renderHook( () => useFetchGifs(category) );

        await waitFor( () => expect( result.current.images.length ).toBeGreaterThan(0) );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();


    });

});