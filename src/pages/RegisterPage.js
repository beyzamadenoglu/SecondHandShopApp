import MaterialForm from '../components/Form';
import { registerUser } from '../services/Register';
import Grid from '@mui/material/Grid';
import Logo from '../constants/images/Logo';
import WomanImage from '../constants/images/Woman';

function RegisterPage(){
    const title = 'Üye Ol';
    const text = 'üye ol';
    
    const or = <p>Hesabın var mı? <a href="/"> Giriş Yap</a> </p>;
   return(
       <>
        <Grid className="login-container">
            <Grid className="woman-container">
                <WomanImage/>
            </Grid>
            <Grid className="form-container" direction="column">
                <Logo/>
                <MaterialForm title={title} text={text} service ={registerUser} button_text={title} or={or}/>
            </Grid>
        </Grid>
           
       </>
   )
}

export default RegisterPage;