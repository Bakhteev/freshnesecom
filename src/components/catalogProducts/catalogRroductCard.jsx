import React from 'react'
import { Link } from 'react-router-dom'

const CatalogRroductCard = ({ imgPrewiev, rating, title, descriptionSmall, price, discount, delivery, feautures,view2, property}) => {
    if (view2 === 0){
        return (
            <Link to="/product" className='col-4 products__item item product-grid'>
                <div className='item__content'>
                    <span className={`item__discount ${discount !== 0 ? 'active' : ''}`}>- {discount} %</span>
                    <img
                        src={imgPrewiev}
                        // alt={img}
                        className='item__img'
                     />
                    <h3 className='item__title'>{title}</h3>
                    <p className='item__description'>{descriptionSmall}</p>
                    {/* {icon} */}
                    <div className='item__row row'>
                        <div className='item__column flex'>
                            <span className='item__price'>
                                {price ? Math.round(price - (price / 100) * discount) : '0'} USD</span>
                            <span className='item__prev-price active'>{price}</span>
                        </div>
                        <button className='item__btn'>Buy now</button>
                    </div>
                </div>
            </Link>
        );
    }
    else{
        return(
            <React.Fragment>
                <Link to="/product" className="product flex">
                    <div className="col-4">
                        <img
                            src={imgPrewiev}
                            alt=""
                            className="product__img"
                        />
                    </div>
                    <div className="col-4 product__col">
                        <h3 className="produsct__title">{title}</h3>
                        <p className="product__description">{descriptionSmall}</p>
                        {/* {icon} */}
                        {/* <img src="" alt="" className="product__rating"/> */}
                        <div className="product__row flex">
                            <ul className="col-6 product__feautures">
                                {feautures.map(item => {
                                    return (
                                        <li key={item} className="product__item flex">{item}</li>
                                    )
                                })}
                            </ul>
                            <ul className="col-6 product__feautures">
                                {property.map(item =>{
                                    if(item.tag){
                                        return(
                                            <li key={item} className="product__item flex"><span className="product__span--green">{item.tagText}</span>{item.text}</li>
                                        )
                                    }
                                    else{
                                        return(
                                            <li key={item} className="product__item flex">{item.text}</li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 product__col">
                        <span className="product__price">{price ? Math.round(price - (price / 100) * discount) : '0'} USD</span>
                        <span className="product__prev-prise">{price}</span>
                        <span className="product__shipping product__shipping--bold">Free Shipping</span>
                        <span className="product__shipping">Delivery in {delivery} day</span>
                        <a className="product__link">Product Detail</a>
                        <button className="product__btn flex">
                            <svg className="product__icon" width="" height="" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13062 2.26001C9.76714 1.62349 10.6304 1.2659 11.5306 1.2659C12.4308 1.2659 13.2941 1.62349 13.9306 2.26001C14.5671 2.89653 14.9247 3.75984 14.9247 4.66001C14.9247 5.56019 14.5671 6.42349 13.9306 7.06001L13.0573 7.93334L8.25729 12.7333L3.45729 7.93334L2.58396 7.06001C1.94744 6.42349 1.58984 5.56019 1.58984 4.66001C1.58984 3.75984 1.94744 2.89653 2.58396 2.26001C3.22048 1.62349 4.08378 1.2659 4.98396 1.2659C5.88413 1.2659 6.74744 1.62349 7.38396 2.26001L8.25729 3.13334L9.13062 2.26001Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="product__wish">Add to wish list</span>
                        </button>
                    </div>
                </Link>
            </React.Fragment>
        )
    
    }
}

export default CatalogRroductCard
