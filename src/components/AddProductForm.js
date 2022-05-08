import React, { useRef, useState, useEffect } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Box } from '@mui/material';
import Switch from "react-switch";
import Dropdown from '../components/Dropdown';
import getBrands from '../services/Brands';
import getColors from '../services/Colors';
import getStatus from '../services/GetUsingStatus';
import getCategories from '../services/Colors';
import Preview from '../components/PreviewImage';
import UploadImg from '../constants/images/UploadImg';
import { YupSchema } from '../constants/ProductSchema';
import '../styles/AddProduct.css';

const initialValues = {
    productname: '',
    productdescription: '',
    file: null,
};

function AddProductForm() {

    const [brand, setBrand] = useState([]);
    const [color, setColor] = useState([]);
    const [status, setStatus] = useState([]);
    const [category, setCategory] = useState([]);
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        async function fetchData() {
            brands();
            colors();
            statuses();
            categories();
        };
        fetchData();
    }, []);


    const checkOffer = (checked) => {
       setChecked(!!checked);
       console.log(checked);
    }
    const brands = async () => {
        getBrands().then((data) => {
            setBrand(data);
            console.log('brands', brand);
        });
    }

    const colors = async () => {
        getColors().then((data) => {
            setColor(data);
            console.log('colors', color);
        });
    }

    const statuses = async () => {
        getStatus().then((data) => {
            setStatus(data);
            console.log('statuses', status);
        });
    }

    const categories = async () => {
        getCategories().then((data) => {
            setCategory(data);
            console.log('categories', category);
        });
    }

    const fileRef = useRef(null);

    return (
        <div className="container-product">
        <div className="product-infos">

            <Formik initialValues={initialValues}
                validationSchema={YupSchema}

                onSubmit={(values, formikHelpers, ref) => {
                    let data = new FormData();
                    data.append('file', values.file);
                    //     return axios--
                    console.log(values);
                    formikHelpers.resetForm();
                }}
            >

                {({ errors, touched, setFieldValue, values }) => (
                    <Form>
                   
                        <div className="form">
                            <div className='pro'>
                                <h1>Ürün Detayları</h1>
                                <Field
                                    name='productname'
                                    label='Ürün Adı'
                                    placeholder='Örnek: Iphone 12 Pro Max'
                                    className='formik-input name'
                                />
                                <Box height={16} />
                                <Field
                                    name='productdescription'
                                    label='Açıklama'
                                    placeholder='Ürün açıklamanızı girin'
                                    className='formik-input desc'
                                />
                                <Box height={16} />
                                <p>Kategori</p>
                                <Dropdown options={category} text={'Kategori Seç'} />
                                <Box height={16} />
                                <p>Marka</p>
                                <Dropdown options={brand} text={'Marka Seç'} />
                                <Box height={16} text={'Renk Seç'} />
                                <p>Renk</p>
                                <Dropdown options={color} text={'Renk Seç'} />
                                <Box height={16} />
                                <p>Kullanım Durumu</p>
                                <Dropdown options={status} text={'Kullanım Durumu Seç'} />
                                <Box height={16} />
                                <p>Fiyat</p>
                                <Field
                                    name='price'
                                    label='Fiyat'
                                    placeholder='Bir Fiyat Girin'
                                    className='formik-input'

                                />
                                <Box height={16} />
                               <Switch uncheckedIcon='' checkedIcon='' onChange={checkOffer} checked={checked} />
                            </div>

                            <div className='product-image'>
                                <h1>Ürün Görseli</h1>
                                <input
                                    ref={fileRef}
                                    type='file'
                                    name='file'
                                    error={Boolean(errors.file) && Boolean(touched.file)}
                                    helperText={Boolean(touched.email) && errors.email}
                                    hidden
                                    onChange={(e) => {
                                        setFieldValue('file', e.target.files[0]);
                                    }}
                                />
                                <UploadImg />
                                {values.file && <Preview file={values.file} />}
                                <Box height={16} />
                                <button type='button' variant='contained' size='large'
                                    onClick={() => {
                                        fileRef.current.click();
                                    }}
                                >
                                    Görsel Seçin
                                </button>

                                <button className='submit-btn' type='submit '>Submit</button>
                            </div>
                        </div>
                        
                    </Form>
                )}
            </Formik>
        </div>
        </div>
        
    )
}

export default AddProductForm;