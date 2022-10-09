import { getGifs } from "../../src/helpers/getGifs";

describe('Testing getGifs function', () => {

    test('Should return an array with objects', async () => {

        const category = 'Breaking Bad';
        const resp = await getGifs(category);

        expect( resp.length ).toBeGreaterThan( 0 );

        expect( resp[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

        expect(resp[0].url).toContain('https');

    });

});