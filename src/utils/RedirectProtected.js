
import { useSelector } from 'react-redux';  
import { useLocation } from 'react-router';
import { Navigate, Outlet } from 'react-router-dom';


const RedirectProtected = () => {

    const location = useLocation();
    const { user } = useSelector(state => state);
    const isAuth = user.user.isAuth;

    return isAuth ? <Outlet /> : (<Navigate to='/' replace state={{from: location}}/> );
   
}

export default RedirectProtected;