import React from 'react'
import classNames from 'classnames';

const ProductCard = (props) => {
    return (
        <div className="row">
            <div className="products__item item">
                <div className="item__content">
                    {props.discount.map(discount => {
                        return (
                            <span className={classNames("item__discount", {
                                '': discount === 0,
                                'active': discount !== 0,
                            })}>- {discount}%</span>
                        )
                    })}
                    {props.img.map(img => {
                        return (
                            <img src={img} alt="" className="item__img" />
                        )
                    })}
                    {props.title.map(title => {
                        return (
                            <h3 className="item__title">{title}</h3>
                        )
                    })}
                    {props.description.map(description => {
                        return (
                            <p className="item__description">{description}</p>
                        )
                    })}
                    <div className="item__row flex">
                        <div className="item__column flex">
                            {props.price.map(price => {
                                return (
                                    <span className="item__price">{price} USD</span>
                                )
                            })}
                            {props.prevPrice.map(prevPrice => {
                                return (
                                    <span className={classNames('item__prev-price', {
                                        '': prevPrice === props.price,
                                        'active': prevPrice !== props.price,
                                    })}>{prevPrice}</span>
                                )
                            })}
                        </div>
                        <button className="item__btn">Buy now</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCard
