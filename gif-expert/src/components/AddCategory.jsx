/* eslint-disable react/prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [input, setInput] = useState();

  const onInputChange = ({ target }) => {
    setInput(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.trim().length <= 1) return;

    //setCategories((categories) => [input, ...categories]);
    onNewCategory(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={ onSubmit } aria-label='form'>
      <input
      type="text"
      placeholder="Find gifs
      "name=""
      id=""
      value={ input }
      onChange={ onInputChange }/>
    </form>
  )
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
