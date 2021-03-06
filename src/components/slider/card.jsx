import React from 'react'
import SwiperCore, { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import { sliderContent } from './const'

SwiperCore.use([Navigation, A11y])

const Card = () => {
  return (
    <div className="comments__slider slider">
      <Swiper
        breakpoints={{ 578: { slidesPerView: 3 } }}
        spaceBetween={32}
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={3}
        loop={true}
        navigation
      >
        {sliderContent.map((item) => {
          return (
            <SwiperSlide key={item}>
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
