import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Piece']);  
  
  const onAddCategory = ( newCategory ) => {
    
    if (categories.includes(newCategory)) return;

    // setCategories( cat => [...cat, 'Valorant'] );
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory = { (value) => onAddCategory(value)}   
      />

      {
        categories.map( (category) => (
          <GifGrid 
              key={category} 
              category={category} 
          />
        ))

      }

    </>
  );
};
