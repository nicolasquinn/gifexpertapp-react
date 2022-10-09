import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

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

      <div className="card-grid">
        {
          images.map( ( img ) => (
            <GifItem 
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>

    </>
  )
}
