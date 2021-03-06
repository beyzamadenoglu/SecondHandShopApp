import React from 'react';
import Button from '@mui/material/Button';


const ProductButton = ({ text }) => {
  return (
    <>
      <div className='Button'>
        <Button variant='contained'>  {text}
        </Button>
      </div>
    </>
  );
}

export default ProductButton;
