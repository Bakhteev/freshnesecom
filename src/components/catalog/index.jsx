import React from 'react';
import CatalogHeader from '../catalogHeader';
import CatalogSidebar from '../catalogSidebar';
import Pagination from '../pagination';
import { feautures, property } from './const'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import setProducts from '../../redux/actions/product';
import CatalogRroductCard from '../catalogProducts/catalogRroductCard';

const Catalog = () => {
  const [viewMode, setViewMode] = React.useState(0)
  const store = useSelector(({ product, filters }) => {
    return {
      items: product.items,
    };
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get(`https://freshnesecom-9e871.web.app/database.json`).then(({ data }) => {
      console.log(data.products)
      // dispatch(setProducts(data.products));
    });
  }, []);
  return (
    <section className='catalog'>
      <div className='container'>
        <CatalogHeader viewMode={setViewMode} store={store} />
        <div className='catalog__row row'>
          <div className='col-3'>
            <CatalogSidebar />
          </div>
          <div className='col-9 catalog__item row'>
            {store.items &&
              store.items.map((item, index) =>
                index < 9 ? <CatalogRroductCard {...item} view2={viewMode} feautures={feautures} property={property} /> : '',
              )}
          </div>
        </div>
        <Pagination store={store}/>
      </div>
    </section>
  );
};

export default Catalog;
