import { useState } from "react"

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Better Call Saul', 'Breaking Bad' ]);

  return (
    <>
        <h1>GifExpertApp</h1>
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
