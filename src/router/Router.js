import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import Index from '../pages/IndexPage';
import Account from '../pages/MyAccountPage';
import Add from '../pages/AddProductPage';
import RedirectProtected from '../utils/RedirectProtected';


function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/index' element={<Index />} />
                <Route element={<RedirectProtected />}>
                    <Route path='/account' element={<Account />} />
                    <Route path='/add' element={<Add />} />
                </Route>

            </Routes>

        </>
    )
}

export default Router;