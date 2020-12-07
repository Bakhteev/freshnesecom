import React from 'react';
import Sidebar from '../sidebar';
import ProductCard from '../productCard';
import { itemContent } from './const';

const Products = () => {
  return (
    <section className='products'>
      <div className='container'>
        <div className='products__row--top row'>
          <Sidebar
            title='Best selling products'
            item={['Kitchen', 'Meat and fish', 'Special nutrition', 'Pharmacy', 'Baby']}
            link='#'
          />
          <div className='col-9'>
            <div className='row'>
              {itemContent.map((item) => {
                return <ProductCard {...item} />;
              })}
            </div>
          </div>
        </div>
        <div className='products__row-bottom'>
          <Sidebar
            title='Best from Farmers'
            item={['Carrots', 'Tomatoes', 'Potatoes', 'Chicken', 'Pork']}
            link='#'
          />
          <div className='col-9'>
            <div className='row'>
              {itemContent.map((item) => {
                return <ProductCard {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
