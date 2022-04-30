import MaterialForm from '../components/Form';
import Logo from '../constants/images/logo';

import { loginUser } from '../services/Login';


function LoginPage() {

    const title = 'Giriş Yap';
    const text = 'giriş yap';

    return (
        <div className='container'>
            <Logo />
            <MaterialForm title={title} text={text} service={loginUser} button_text={title}/>
        </div>
    )
}

export default LoginPage;