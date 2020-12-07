import React from 'react';
import classNames from 'classnames';

const ProductCard = ({ img, discount, title, description, price, prevPrice }) => {
  const [currentPrice, setPrice] = React.useState(price);

  const texthandler = (event) => {
    let number = parseInt(event.target.value);
    console.log(typeof number === 'number');
    setPrice(parseInt(typeof number === 'number' ? number : 0));
  };

  return (
    <div className='products__item item'>
      <input type='text' onChange={texthandler} placeholder='Напиши что - нибудь' />
      <div className='item__content'>
        <span className={`item__discount ${discount !== 0 ? 'active' : ''}`}>{discount}</span>
        <img src={img} alt={img} className='item__img' />
        <h3 className='item__title'>{title}</h3>
        <p className='item__description'>{description}</p>
        <div className='item__row row'>
          <div className='item__column'>
            <span className='item__price'>
              {currentPrice ? currentPrice - (currentPrice / 100) * discount : '0'} USD
            </span>
            <span className='item__prev-price active'>{currentPrice} USD</span>
          </div>
          <button className='item__btn'>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
