import React from 'react';
import Sidebar from '../sidebar';
import ProductCard from '../productCard';
import { itemContent } from '../productCard/const';

const Products = () => {
  return (
    <section className='products'>
      <div className='container'>
        <div className="products__content">
          <div className='products__row--top row'>
            <div className="col-3">
              <Sidebar
                title='Best selling products'
                item={['Kitchen', 'Meat and fish', 'Special nutrition', 'Pharmacy', 'Baby']}
                link='#'
              />
            </div>
            <div className='col-9 products__items row'>
              {itemContent.map((item, index) => (index < 3 ? <ProductCard {...item} /> : ''))}
            </div>
          </div>
          <div className='products__row--bottom row'>
            <div className="col-3">
              <Sidebar
                title='Best from Farmers'
                item={['Carrots', 'Tomatoes', 'Potatoes', 'Chicken', 'Pork']}
                link='#'
              />
            </div>
            <div className='col-9 products__items row'>
              {itemContent.map((item, index) => (index < 3 ? <ProductCard {...item} /> : ''))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
