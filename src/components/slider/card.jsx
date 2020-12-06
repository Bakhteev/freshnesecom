import React from 'react';
import { sliderContent } from './const';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, A11y]);

const Card = () => {
    return (
        <div className="comments__slider slider">
            <Swiper
                spaceBetween={32}
                slidesPerView={3}
                centeredSlides={true}
                initialSlide={1}
                loop={true}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {sliderContent.map(item => {

                    return (
                        < SwiperSlide>
                            <div className="col-3 slider__item">
                                <div className="slider__content">
                                    <p className="slider__comment">{item.comment}</p>
                                    <span className="slider__name">{item.name}</span>
                                    <img src={item.img} alt="" className="slider__icon" />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Card
