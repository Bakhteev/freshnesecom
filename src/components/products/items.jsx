import React from 'react'
import { itemContent } from './const'
import classNames from 'classnames';

const Items = () => {
    return (
        <div className="row">
            {itemContent.map((item) => {
                return (
                    <div className="products__item item">
                        <div className="item__content">
                            <span className={classNames("item__discount",{
                                '': item.discount === 0,
                                'active': item.discount !== 0,
                            })}>- {item.discount}%</span>
                            <img alt="" className="item__img" />
                            <h3 className="item__title">{item.title}</h3>
                            <p className="item__description">{item.description}</p>
                            <div className="item__row flex">
                                <div className="item__column flex">
                                    <span className="item__price">{item.price} USD</span>
                                    <span className={classNames( 'item__prev-price', {
                                        '': item.prevPrice === item.prise,
                                        'active': item.prevPrice !== item.price,
                                    })}>{item.prevPrice}</span>
                                </div>
                                <button className="item__btn">Buy now</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Items
