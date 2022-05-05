import React from 'react';
import ProductButton from '../components/Button';

const Product = ({ image, name, brand, color, status, price, description }) => {
    return (
        <div className='product-image'>
            <div className='img'>
                <img src={image} alt='Product_Image' />
            </div>
            <div className='product-info'>
                <h1>{name}</h1>
                <div className='info'>
                    <p><span>Marka:</span>{brand}</p>
                    <p><span>Renk:</span>{color}</p>
                    <p><span>Kullanım Durumu:</span>{status}</p>
                    <h2>{price}</h2>
                </div>
                <div className='buttons'>
                <ProductButton />
                <ProductButton />
                </div>
               <div className='description'>
                   <h3>Açıklama</h3>
                   <p>{description}</p>
               </div>
            </div>
        </div>

    );
}

export default Product;
