import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button, Box, TextField } from '@mui/material';

function AddProductPage() {

    return (
        <div className="add-product">
            <div className="product-infos">

            <h1>Ürün Detayları</h1>
            <Formik>

                    {({ errors, isValid, touched, dirty }) => (
                        <Form>
                            <p></p>
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
                                {}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="product-images"></div>

        </div>
    )
}

export default AddProductPage;