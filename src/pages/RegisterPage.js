import MaterialForm from '../components/Form';
import { registerUser } from '../services/Register';
function RegisterPage(){
    const title = 'Üye Ol';
    const text = 'üye ol';
   return(
       <>
           <MaterialForm title={title} text={text} service ={registerUser} button_text={title}/>
       </>
   )
}

export default RegisterPage;