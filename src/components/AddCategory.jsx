import { useState } from "react"
import { PropTypes } from "prop-types";

export const AddCategory = ({ onAddCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {

    setInputValue( target.value );

  }

  const onFormSubmit = (e) => {

    e.preventDefault();

    if ( inputValue.trim().length <= 1 ) return;

    onAddCategory( inputValue.trim() );
    setInputValue('');
    
  }

  return (
    <form onSubmit={ onFormSubmit } aria-label="form">
      <input 
        type="text"
        placeholder="Search GIFs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}
