import MaterialForm from '../components/Form';
import Grid from '@mui/material/Grid';

import Logo from '../constants/images/Logo';
import WomanImage from '../constants/images/Woman';

import { loginUser } from '../services/Login';


function LoginPage() {

    const title = 'Giriş Yap';
    const text = 'giriş yap';
    const or = <p>Hesabın yok mu? <a href="/register"> Üye Ol </a> </p>;
    const password= <p className='right'>Şifremi Unuttum</p>;
    return (
        <Grid className="login-container">
            <Grid className="woman-container">
                <WomanImage/>
            </Grid>
            <Grid className="form-container" direction="column">
                <Logo/>
                <MaterialForm title={title} button_text="Giriş" service={loginUser} or={or} forgotPassword={password} text={text} />
            </Grid>
        </Grid>
    )
}

export default LoginPage;