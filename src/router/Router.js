import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import Index from '../pages/IndexPage';
import Account from '../pages/MyAccountPage';
import Add from '../pages/AddProductPage';

function Router() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/index' element={<Index />} />
                <Route path='/account' element={<Account />} />
                <Route path='/add' element={<Add />} />
            </Routes>
        </>
    )
}

export default Router;