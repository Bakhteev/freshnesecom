import React from 'react';
import ProductCard from '../productCard';
import SectionHeader from '../section-header';
import { itemContent } from '../productCard/const';

const Headline = () => {
  return (
    <section className='headline'>
      <div className='container'>
        <div className='headline__content'>
          <SectionHeader title='Section Headline' btn='Button' />
          <div className='headline__row row'>
            {itemContent.map((item, index) => (index < 4 ? <ProductCard {...item} col={[true, true, true, true ]} /> : ''))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headline;
