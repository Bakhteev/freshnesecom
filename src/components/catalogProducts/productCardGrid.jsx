import React from 'react'
import {Link} from 'react-router-dom'

const ProductCardGrid = ({ img, icon, title, description, price, discount }) => {
    return (
        <Link to="/product" className='col-4 products__item item product-grid'>
            <div className='item__content'>
                <span className={`item__discount ${discount !== 0 ? 'active' : ''}`}>- {discount} %</span>
                <img
                    src={img}
                    // alt={img}
                    className='item__img' />
                <h3 className='item__title'>{title}</h3>
                <p className='item__description'>{description}</p>
                {icon}
                <div className='item__row row'>
                    <div className='item__column flex'>
                        <span className='item__price'>
                            {price ? price - (price / 100) * discount : '0'} USD</span>
                        <span className='item__prev-price active'>{price}</span>
                    </div>
                    <button className='item__btn'>Buy now</button>
                </div>
            </div>
        </Link>
    );
}

export default ProductCardGrid
