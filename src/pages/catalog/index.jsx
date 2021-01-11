import React from 'react';
import CatalogHeader from '../../components/catalogHeader';
import CatalogSidebar from '../../components/catalogSidebar';
import Pagination from '../../components/pagination';
import { feautures, property } from './const'
import CatalogRroductCard from '../../components/catalogProducts/catalogRroductCard';

const Catalog = ({store, setId}) => {
  const [viewMode, setViewMode] = React.useState(0)
  const [showMore, setShowMore] = React.useState(9)
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
              store.items.map((item, index) => index < showMore ? <CatalogRroductCard {...item} view2={viewMode} feautures={feautures} property={property} setId={setId} /> : '',
              )}
          </div>
        </div>
        <Pagination store={store} showMore={showMore} setShowMore={setShowMore}/>
      </div>
    </section>
  );
};

export default Catalog;
