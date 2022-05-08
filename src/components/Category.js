import React from 'react';


const Category = ({ categories, handleClick }) => {

  return (
    <>
      <div className="navbar products">
        <div className="nav-item">Hepsi</div>
        {
          categories?.map(category => (
            <div className="nav-item" onClick={() => handleClick(category.id)} key={category.id} >{category.name}</div>
          ))
        }
        <div className="nav-item">Diğer</div>
      </div>

    </>
  );
}

export default Category;
