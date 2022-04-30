import { Button, Box, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { YupSchema } from '../constants/YupSchema';
import { toast } from 'react-toastify';

const initialValues = {
    email: '',
    password: ''
};


const MaterialForm = ({ title, text, service, button_text }) => {

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
                            <p>Fırstlardan yararlanmak için {text}!</p>
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
                            <Box height={16} />
                            <Button type='submit' variant='contained' size='large' disabled={!dirty || !isValid}
                            >
                                {button_text}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
    )
}

export default MaterialForm;

