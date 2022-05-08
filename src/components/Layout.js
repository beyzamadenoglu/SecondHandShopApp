import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Person from '@mui/icons-material/PersonOutline';
import { useSelector } from 'react-redux';
import '../styles/header.css';
import Logo from '../constants/images/Logo';


const Layout = ({ children }) => {

  const { user } = useSelector(state => state);

  const isAuth = user?.isAuth;

  const text = isAuth ? 'Hesabım' : 'Giriş Yap';
  const link = isAuth ? '/account' : '/';

  return (
    <>
      <div className='navbar'>
        <Logo />
        <div className='buttons'>
          <Button style={{
            borderRadius: '8px',
            backgroundColor: "#f0f8ff",
            padding: "2px 20px",
            fontSize: "10px",
            color: '#4b9ce2',
            textTransform: 'none',
            fontWeight: 'bold',
            margin: '0 7px'
          }} variant='contained' href={link}> <Person /> {text} </Button>
          <Button style={{
            borderRadius: '8px',
            backgroundColor: "#f0f8ff",
            padding: "2px 20px",
            fontSize: "10px",
            color: '#4b9ce2',
            textTransform: 'none',
            fontWeight: 'bold',
            margin: '0 7px'
          }} variant='contained' href={link}> <AddIcon />  Ürün Ekle </Button>
        </div>
      </div>
      {children}
    </>
  );
}

export default Layout;
