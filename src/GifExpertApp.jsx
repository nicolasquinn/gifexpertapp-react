import { useState } from "react"
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Better Call Saul', 'Breaking Bad' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;
        setCategories( [...categories, newCategory] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onAddCategory={ onAddCategory } />

        {
            categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category } 
                />
            ))
        }

    </>
  )
}
