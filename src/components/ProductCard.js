import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../constants/images/IndexBanner';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import axios, { baseURL } from '../constants/axios';


const ProductCard = ({ product }) =>  {   
  const url = product?.image?.formats?.thumbnail?.url !== undefined ? `${baseURL}${product?.image?.formats?.large?.url}` : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"

    return (
      <div>
        <Card>
        <CardMedia
        component="img"
        height="194"
        image={url}
        alt="Paella dish"
      />
        <CardHeader title={product?.name} />
        <Typography variant="h1" component="h2">
          {product?.name}
        </Typography>
        </Card>
      </div>
    );
  }
  
  export default ProductCard;
  