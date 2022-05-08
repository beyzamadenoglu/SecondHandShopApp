import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import getAllProducts from '../services/ProductsService';
import getAllCategories from '../services/Categories';
import getCategoryNo from '../services/CategoriesNo';
import Category from '../components/Category';
import getFilteredCategories from '../services/CategoryFilter';
import Layout from '../components/Layout';

import { useSelector } from 'react-redux';  


import Banner from '../constants/images/Banner';

import '../styles/indexpage.css';

function IndexPage() {

  const { user } = useSelector(state => state);

  const isAuth = user.user.isAuth;

  const [product, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryNo, setCategoryNo] = useState(0);


  useEffect(() => {
    async function fetchData() {
      getProducts();
      getCategories();
      getCategoriesNo();
      console.log('off', isAuth)
    };
    fetchData();
  }, []);

  const getProducts = async () => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }

  const getCategories = async () => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }

  const getFiltered = async id => {
    getFilteredCategories(id).then((data) => {
      setProducts(data);
    });
  }

  const getCategoriesNo = async () => {
    getCategoryNo().then((data) => {
      setCategoryNo(data);
    });
  }


  return (
    <>
      <Layout />
      <Banner />
      <div className="index-container">
        <Category categories={categories} handleClick={getFiltered} />
        <div className='products'>
          {product?.map(product => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default IndexPage;