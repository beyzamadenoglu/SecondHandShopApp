import React, { useState, useEffect } from 'react'
import Logo from '../constants/images/IndexBanner';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import getAllProducts from '../services/ProductsService';
import getAllCategories from '../services/Categories';
import Category from '../components/Category';
import getFilteredCategories from '../services/CategoryFilter';
import Offer from '../components/Offer';
import Deneme from '../components/Dropdown';
import '../styles/indexpage.css';

function IndexPage() {
  const [product, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      getProducts();
      getCategories();
    };
    fetchData();
  }, [product]);

  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  }

  const getCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  }

  const getFiltered = async id => {
    const data = await getFilteredCategories(id);
    setProducts(data);
    console.log('datcat', data);
  }


  return (
    <div className="burrito">

      <Category categories={categories} handleClick={getFiltered} />
      <Container>
        <Grid container>
          {product?.map(product => (
            <Grid item key={product.id} xs={12} md={6} lg={4} >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default IndexPage;