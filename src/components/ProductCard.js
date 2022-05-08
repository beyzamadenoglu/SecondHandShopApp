import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { baseURL } from '../constants/axios';


const ProductCard = ({ product }) => {
  const url = product?.image?.formats?.thumbnail?.url !== undefined ? `${baseURL}${product?.image?.formats?.large?.url}` : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"

  return (
    <>
      <Card className='off' sx={{ maxWidth: 150, display: "inline-block" }} >
        <CardMedia
          component="img"
          height="auto"
          width='110%'
          image={url}
          alt='Product Image'
        />
        <div className='name'>
          <Typography variant="p" component="p" >   {product?.name}  </Typography>
        </div>
        <div className='color'>
          <Typography variant="p" component="p" >   {product?.color}  </Typography>
        </div>
        <div className='price'>
          <Typography variant="p" component="p" >   {product?.price}  </Typography>
        </div>
      </Card>
    </>
  );
}

export default ProductCard;
