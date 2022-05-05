import React from 'react';
import Button from './Button';
const OfferedProduct = ({title, price}) =>  {
   
    return (
          <div className = 'product'>
            <img src='' alt='product'/>
            <h1>{title}</h1>
            <Button> {price} </Button>
          </div>
    );
  }
  
  export default OfferedProduct;
