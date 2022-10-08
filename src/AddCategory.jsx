import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {

    setInputValue( target.value );

  }

  const onFormSubmit = (e) => {

    e.preventDefault();

    if ( inputValue.trim().length <= 1 ) return;

    setCategories( categories => [...categories, inputValue] );
    setInputValue('');
    
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input 
        type="text"
        placeholder="Search GIFs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
