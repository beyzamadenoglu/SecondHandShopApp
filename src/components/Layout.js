import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Person from '@mui/icons-material/PersonOutline';


const Layout = ({children}) =>  {
   
    return (
      <>
          <div className = 'Layout'>
            <Button variant='contained'> <AddIcon />  Ürün Ekle </Button>
            <Button variant='contained'> <Person /> Giriş Yap </Button> 
          </div>
          {children}
      </>
    );
  }
  
  export default Layout;
