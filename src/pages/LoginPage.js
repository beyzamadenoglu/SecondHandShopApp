import MaterialForm from '../components/Form';
import Grid from '@mui/material/Grid';

import Logo from '../constants/images/Logo';
import WomanImage from '../constants/images/Woman';

import { loginUser } from '../services/Login';


function LoginPage() {

    const title = 'Giriş Yap';
    const text = 'giriş yap';

    return (
        <Grid className="login-container">
            <Grid className="woman-container">
                <WomanImage/>
            </Grid>
            <Grid className="form-container" direction="column">
                <Logo/>
                <MaterialForm button_text="Giriş Yap"/>
            </Grid>
        </Grid>
    )
}

export default LoginPage;