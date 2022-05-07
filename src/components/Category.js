import React from 'react';
import { Nav } from 'react-bootstrap';

const Category = ({ categories, handleClick }) => {

  return (
    <>
    <div className="navbar">
      <div  className="nav-item">Hepsi</div>
      { 
        categories?.map(category => (
          <div className="nav-item" onClick={() => handleClick(category.id)} key={category.id} >{category.name}</div>
          ))
        }
        <div  className="nav-item">Diğer</div> 
      </div>

    </>
  ); 
}

export default Category;
