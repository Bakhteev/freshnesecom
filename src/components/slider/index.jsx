import React from 'react'
import Card from './card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { sliderContent } from './const';


const Comments = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };
    return (
        <section className="comments">
            <div className="container">
                <div className="comments__slider slider">
                    <Slider {...settings}>
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
                    </Slider>
                </div>
            </div>
        </section >
    )
}

export default Comments
