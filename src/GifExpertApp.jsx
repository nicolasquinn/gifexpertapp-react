import { useState } from "react"
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Better Call Saul', 'Breaking Bad' ]);

    const onAddCategory = () => {
        setCategories( [...categories, 'Sandman'] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory setCategories={ setCategories } />

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
