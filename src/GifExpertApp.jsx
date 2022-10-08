import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Better Call Saul' ]);

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
