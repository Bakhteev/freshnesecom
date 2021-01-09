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
  const [showMore, setShowMore] = React.useState(9)
  const store = useSelector(({ product, filters }) => {
    return {
      items: product.items,
    };
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get(`http://localhost:3000/database.json`).then(({ data }) => {
      dispatch(setProducts(data.products));
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
              store.items.map((item, index) => index < showMore ? <CatalogRroductCard {...item} view2={viewMode} feautures={feautures} property={property} /> : '',
              )}
          </div>
        </div>
        <Pagination store={store} showMore={showMore} setShowMore={setShowMore}/>
      </div>
    </section>
  );
};

export default Catalog;
