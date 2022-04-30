import React from 'react';
import Button from '@mui/material/Button';

const HeaderButton = ({text, icon}) =>  {

    return (
      <>
          <div className = 'Button'>
         <Button variant='contained'>{text}</Button>
          </div>
      </>
    );
  }
  
  export default HeaderButton;
  