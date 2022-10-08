import { useState } from "react"

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Better Call Saul', 'Breaking Bad' ]);

    const onAddCategory = () => {
        setCategories( [...categories, 'Sandman'] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <button onClick={ onAddCategory }> Agregar </button>
        <ol>
        {
            categories.map( category => {
                return <li key={ category }>{ category }</li>
            })
        }
        </ol>
    </>
  )
}
