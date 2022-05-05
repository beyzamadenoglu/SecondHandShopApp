import React from 'react';

const Category = ({ categories, handleClick }) => {

  return (
    <>
    <ul>
      <li onClick>Hepsi</li>
     { 
      categories?.map(category => (
            <li onClick={() => handleClick(category.id)} key={category.id} >{category.name}</li>
        ))
      }
      <li>Diğer</li>
      </ul>

    </>
  ); 
}

export default Category;
