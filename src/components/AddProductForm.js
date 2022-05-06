import React, {useRef} from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Button, Box, TextField } from '@mui/material';
import Dropdown from '../components/Dropdown';
import Preview from '../components/PreviewImage';
import UploadImg from '../constants/images/UploadImg';
import { YupSchema } from '../constants/YupSchema';


const initialValues = {
    productname: '',
    productdescription: '',
    file: null,
};


function AddProductForm() {

    const fileRef = useRef(null);

    return (
        <div className="add-product">
            <div className="product-infos">

                <h1>Ürün Detayları</h1>

                <Formik  initialValues={initialValues}
                    validationSchema={YupSchema}

                    onSubmit={(values, formikHelpers, ref) => {
                        console.log(values);
                        formikHelpers.resetForm();
                    }}
>

                   
                    {({ errors,  touched, setFieldValue, values}) => (
                        <Form>
                            <div>
                                <p></p>
                                <Field
                                    name='productname'
                                    label='Ürün Adı'
                                    placeholder='Örnek: Iphone 12 Pro Max'
                                />
                                <Box height={16} />
                                <Field
                                    name='productdescription'
                                    label='Açıklama'
                                    placeholder='Ürün açıklamanızı girin'
                                />
                                <Box height={16} />
                                <Dropdown />
                                <Dropdown />
                                <Dropdown />
                                <Dropdown />

                                <Field
                                    name='price'
                                    label='Fiyat'
                                    placeholder='Bir Fiyat Girin'
                                />

                            </div>

                            <div className='product-image'>
                             <h2>Ürün Görseli</h2>
                                <input 
                                ref={fileRef}
                                type='file' 
                                error={Boolean(errors.file) && Boolean(touched.file)}
                                helperText={Boolean(touched.email) && errors.email}
                                hidden
                                name='file' 
                                onChange={(e) => {
                                    setFieldValue('file', e.target.files[0]);
                                }} 
                                />
                                <UploadImg />
                             {values.file &&  <Preview file={values.file} />}
                            <Box height={16} />
                            <Button type='submit' variant='contained' size='large'
                                onClick={()=> {fileRef.current.click();
                                }}
                            >
                                Görsel Seçin
                            </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>


        </div>
    )
}

export default AddProductForm;