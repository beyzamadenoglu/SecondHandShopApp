import { Button, Box, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { YupSchema } from '../constants/UserSchema';
import { toast } from 'react-toastify';

const initialValues = {
    email: '',
    password: ''
};


const MaterialForm = ({ title, text, service, button_text, or, forgotPassword}) => {

    //email veya şifre yanlışta kullan
   // toast.error('Emailiniz veya Şifreniz Hatalı.');

   const handleService = async (credentials) => {
    service(credentials);
  }

    return (
       
            <div className='MaterialForm'>

                <Formik
                    initialValues={initialValues}
                    validationSchema={YupSchema}

                    onSubmit={(values, formikHelpers) => {
                        console.log(values);
                        handleService(values);
                        formikHelpers.resetForm();
                    }}
                >

                    {({ errors, isValid, touched, dirty }) => (
                        <Form>
                            <h1>{title}</h1>
                            <p>Fırsatlardan yararlanmak için {text}!</p>
                            <Field
                                name='email'
                                type='email'
                             
                                as={TextField}
                                variant='filled'
                                label='Email'
                                fullWidth
                                error={Boolean(errors.email) && Boolean(touched.email)}
                                helperText={Boolean(touched.email) && errors.email}
                            />
                            <Box height={16} />
                            <Field
                                name='password'
                                type='password'
                
                                as={TextField}
                                variant='filled'
                                label='Password'
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

