import React from 'react';
import { Link } from 'react-router-dom'

const ProductCard = ({ img, discount, title, description, price, col }) => {
  // const [currentPrice, setPrice] = React.useState(price);

  // const texthandler = (event) => {
  //   let number = parseInt(event.target.value);
  //   console.log(typeof number === 'number');
  //   setPrice(parseInt(typeof number === 'number' ? number : 0));
  // };<input type='text' onChange={texthandler} placeholder='Напиши что - нибудь' />
  console.log(col)
  if (col) {
    return (
      <Link to="/product" className='col-3 products__item item'>
        <div className='item__content'>
          <span className={`item__discount ${discount !== 0 ? 'active' : ''}`}>- {discount} %</span>
          <img
            // src={img}
            // alt={img}
            className='item__img' />
          <h3 className='item__title'>{title}</h3>
          <p className='item__description'>{description}</p>
          <div className='item__row row'>
            <div className='item__column flex'>
              <span className='item__price'>
                {price ? price - (price / 100) * discount : '0'} USD
            </span>
              <span className='item__prev-price active'>{price}</span>
            </div>
            <button className='item__btn'>Buy now</button>
          </div>
        </div>
      </Link>
    );
  }
  else {
    return (
      <Link to="/product" className='col-4 products__item item'>
        <div className='item__content'>
          <span className={`item__discount ${discount !== 0 ? 'active' : ''}`}>- {discount} %</span>
          <img
            // src={img}
            // alt={img}
            className='item__img' />
          <h3 className='item__title'>{title}</h3>
          <p className='item__description'>{description}</p>
          <div className='item__row row'>
            <div className='item__column flex'>
              <span className='item__price'>
                {price ? price - (price / 100) * discount : '0'} USD
            </span>
              <span className='item__prev-price active'>{price}</span>
            </div>
            <button className='item__btn'>Buy now</button>
          </div>
        </div>
      </Link>
    );
  }
};

export default ProductCard;
