import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Person from '@mui/icons-material/PersonOutline';

import '../styles/header.css';
import Logo from '../constants/images/Logo';


const Layout = ({children}) =>  {
   
    return (
      <>
          <div className='Layout'>
            <Logo />
 
            <Button variant='contained'> <Person /> Giriş Yap </Button> 
            <Button variant='contained'> <AddIcon />  Ürün Ekle </Button>
          </div>
          {children}
      </>
    );
  }
  
  export default Layout;
