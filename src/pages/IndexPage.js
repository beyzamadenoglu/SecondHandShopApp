import React, { useState, useEffect } from 'react'
import Logo from '../constants/images/IndexBanner';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, Menu, MenuItem, Button } from "@material-ui/core"

import getAllProducts from '../services/ProductsService';
import getAllCategories from '../services/Categories';
import Category from '../components/Category';
import getFilteredCategories from '../services/CategoryFilter';


import Account from '../components/Account';

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
  }, []);

  const getProducts = async () => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }

  const getCategories = async () => {
    getAllCategories().then((data) =>  {
      setCategories(data);
    });
  }

  const getFiltered = async id => {
    getFilteredCategories(id).then((data) => {
      setProducts(data);
    });
  }

  return (
      <div className="index-container">
    <Account />
      <Category categories={categories} handleClick={getFiltered} />
        <div>
          {product?.map(product => (
            <Grid item key={product.id} xs={12} >
              <ProductCard product={product} />
            </Grid>
          ))}
        </div>
      </div>
  )
}

export default IndexPage;