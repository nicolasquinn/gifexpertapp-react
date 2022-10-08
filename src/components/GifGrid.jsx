import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Se recibe de manera implícita el key.
export const GifGrid = ({ category }) => {
  
  const [ counter, setCounter ] = useState(10);

  const handlerAdd = () => {
    setCounter( counter + 1 );
  }

  useEffect( () => {
    getGifs(category);
  }, [])

  return (
    <>
        <h3>{ category }</h3>
        <p>La imagen</p>
        <p> { counter } </p>
        <button onClick={ handlerAdd }>+1</button>
    </>
  )
}
