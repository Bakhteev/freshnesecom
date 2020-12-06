import React from 'react'
import ProductCard from '../productCard'
import SectionHeader from '../section-header'

const Headline = () => {
    return (
        <section className="headline">
            <div className="container">
                <div className="headline__content">
                    <SectionHeader title="Section Headline"/>
                    <div className="headline__row row">
                        <ProductCard
                         discount={[36, 1, 24, 0]}
                            img={['https://aif-s3.aif.ru/images/016/628/c17f004b480b8cbecfbc1c3d0ee0ef1e.jpg', 'https://eda.ru/img/eda/464x302i/s2.eda.ru/StaticContent/Photos/120131082151/120329185612/p_O.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRedqI92QNcIA4_L7lr8ekK59UhLOi-PYwIQ&usqp=CAU']}
                            title={['Product Title', 'Product Title 2', 'Product Title 3']}
                            description={['Space for a small product description', 'Space for a small product description', 'Space for a small product description']}
                            price={[20 - (20 / 100 * 36), 20 - (20 / 100 * 1), 20, 30]}
                            prevPrice={[20, 20, 20, 30]}  />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Headline
