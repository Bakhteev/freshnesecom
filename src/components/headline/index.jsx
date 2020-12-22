import React from 'react';
import ProductCard from '../productCard';
import SectionHeader from '../section-header';
import { itemContent } from '../productCard/const';
import { useSelector } from 'react-redux'

const Headline = () => {
  const store = useSelector(({ product, filters }) => {
    return {
      items: product.items,
    };
  });
  return (
    <section className='headline'>
      <div className='container'>
        <div className='headline__content'>
          <SectionHeader title='Section Headline' btn='Button' class={""} />
          <div className='headline__row row'>
            {store.items && store.items.map((item, index) => (index > 5 && index < 10 ? <ProductCard {...item} col={[true, true, true, true]} /> : ''))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headline;
