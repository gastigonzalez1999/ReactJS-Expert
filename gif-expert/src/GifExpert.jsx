import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './styles.css';


export const GifExpert = () => {
  const [categories, setCategories] = useState(['Messi']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory,...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory = { (value) => onAddCategory(value) }
      // setCategories={ setCategories }
      />
        {
        categories.map((category) => (
          <GifGrid
            key={ category }
            category={ category }
          />
        ))
      }
    </>
  )
};
