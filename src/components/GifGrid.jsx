import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Se recibe de manera implícita el key.
export const GifGrid = ({ category }) => {
  
  const [ images, setImages ] = useState([]);

  useEffect( () => {

    getGifs(category)
      .then( (imgs) => setImages(imgs) );

  }, [])

  return ( 
    <>
      <h3>{ category }</h3>
      <ol>
        {
          images.map( ({ id, title }) => (
            <li key={ id }>{ title }</li>
          ))
        }
      </ol>
    </>
  )
}
