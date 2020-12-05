import React from 'react';
import { sliderContent } from './const';

const Card = () => {
    return (
        <div className="comments__slider slider row">
            {sliderContent.map(item => {
                return (
                    <div className="col-4 slider__item">
                        <div className="slider__content">
                            <p className="slider__comment">{item.comment}</p>
                            <span className="slider__name">{item.name}</span>
                            <img src={item.img} alt="" className="slider__icon" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
