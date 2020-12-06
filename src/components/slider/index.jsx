import React from 'react';
import Card from './card';
import SectionHeader from '../section-header';
import { sliderContent } from './const'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, A11y]);




const Comments = () => {
    return (
        <section className="comments">
            <div className="container">
                <div className="comments__content">
                    <div className="padding45">
                        <SectionHeader title="Our customers says" />
                    </div>
                    <Card />
                </div>

            </div>
        </section >

    )
}

export default Comments
