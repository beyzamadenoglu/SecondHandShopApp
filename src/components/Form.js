import { Button, Box, TextField, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { YupSchema } from '../constants/UserSchema';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { userChange } from '../store/userSlice';

const initialValues = {
    email: '',
    password: ''
};


const MaterialForm = ({ title, text, service, button_text, or, forgotPassword}) => {

    const { user } = useSelector(state => state);
    //userSliceın içindeki fonksiyonları kullanmamızı/dışardan 
    // erişebilmemizi ve değiştirebilmemizi sağlıcak
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleService = async (credentials) => {
    service(credentials).then(response => {
        if (response.status === 200) {
        /*    dispatch(userChange({
                
                user: {
                    token: response.data.jwt,
                    mail: response.data.user.email,

                } 
            })) */

            setValues({token: response.data.jwt, mail: response.data.user.email});

            navigate('/index');
        } else {
            toast.error('Emailiniz veya Şifreniz Hatalı.');
        }
    });
  }

//1. user slice, 2. user const user
  console.log('notheh', user.user.token);
  console.log('hehe', user.user.mail);
  console.log('heheeee', user.isAuth);
   const setValues = value =>{
       dispatch(userChange({user:value}))
  }

    return (
       
            <div className='MaterialForm'>

                <Formik
                    initialValues={initialValues}
                    validationSchema={YupSchema}

                    onSubmit={(values, formikHelpers) => {
                        console.log(values);
                        handleService(values);
                     //   formikHelpers.resetForm();
                    }}
                >

                    {({ errors, isValid, touched, dirty }) => (
                        <Form class='credentials-form'>
                            <h1>{title}</h1>
                            <p>Fırsatlardan yararlanmak için {text}!</p>
                            <span>Email</span>
                            <Field
                                name='email'
                                type='email'
                                placeholder='Email@example.com'
                                as={InputBase}
                                variant='filled'
                                fullWidth
                                error={Boolean(errors.email) && Boolean(touched.email)}
                                helperText={Boolean(touched.email) && errors.email}
                            />
                            <span>Şifre</span>
                            <Field
                                name='password'
                                type='password'
                
                                as={InputBase}
                                variant='filled'
                                fullWidth
                                error={Boolean(errors.password) && Boolean(touched.password)}
                                helperText={Boolean(touched.password) && errors.password}
                            />
                            {forgotPassword}
                            <Box height={16} />
                            <Button type='submit' variant='contained' size='large' style={{
        borderRadius: '8px',
        backgroundColor: "#4B9CE2",
        padding: "2px 20px",
        fontSize: "18px",
        color: '#FFFFFF',
        textTransform: 'none'
    }}
 disabled={!dirty || !isValid}
                            >
                                {button_text}
                            </Button>
                            <br/>
                            {or}
                        </Form>
                    )}
                </Formik>
            </div>
    )
}

export default MaterialForm;

