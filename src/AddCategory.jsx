import { useState } from "react"

export const AddCategory = () => {

  const [ inputValue, setInputValue ] = useState('Blacklist');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
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
