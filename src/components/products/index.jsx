import React from 'react';
import Sidebar from '../sidebar';
import ProductCard from '../productCard';
import { itemContent } from '../productCard/const';
import axios from 'axios';
import { useDispatch, useSelector, connect } from 'react-redux';
import setProducts from '../../redux/actions/product'

// export const ProductsArr = () =>{
//   const productArr = []
//   return(
//     React.useEffect(() =>{
//       axios.get(`http://localhost:3000/database.json`).then(({ data }) => productArr(data.products))
//     })
//   )
// } 


const Products = () => {

  const store = useSelector(({ product, filters }) => {
    return {
      items: product.items,
    };
  });

  const dispatch = useDispatch()
  React.useEffect(() => {
    axios.get(`http://localhost:3000/database.json`).then(({ data }) => { dispatch(setProducts(data.products))} )
  }, [])
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
              {store.items && store.items.map((item, index) => (index < 3 ? <ProductCard {...item} /> : ''))}
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
              {store.items && store.items.map((item, index) => (index < 3 ? <ProductCard {...item} /> : ''))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect()(Products);
