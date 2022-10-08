import { getGifs } from "../helpers/getGifs";

// Se recibe de manera implícita el key.
export const GifGrid = ({ category }) => {

  getGifs(category);

  return (
    <>
        <h3>{ category }</h3>
        <p>La imagen</p>
    </>
  )
}
