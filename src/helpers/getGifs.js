
export const getGifs = async (category) => {

    const key = 'NfjyWicXWThaqg5U5vkFFoFZoh6uFAJ7'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ key }&q=${ category }&limit=20`;
    const resp = await fetch(url)
    const { data } = await resp.json();
    
    const gifs = data.map( gif => ({
        id: gif.id,
        url: gif.url,
        img: gif.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs;
}