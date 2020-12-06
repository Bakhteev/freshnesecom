import React from 'react'
import Sidebar from '../sidebar';
import ProductCard from '../productCard';

const Products = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__row--top row">
                    <Sidebar
                        title="Best selling products"
                        item={['Kitchen', 'Meat and fish', 'Special nutrition', 'Pharmacy', 'Baby']}
                        link="#"
                    />
                    <div className="col-9">
                        <ProductCard
                            discount={[36, 1, 24]}
                            img={['https://aif-s3.aif.ru/images/016/628/c17f004b480b8cbecfbc1c3d0ee0ef1e.jpg', 'https://eda.ru/img/eda/464x302i/s2.eda.ru/StaticContent/Photos/120131082151/120329185612/p_O.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRedqI92QNcIA4_L7lr8ekK59UhLOi-PYwIQ&usqp=CAU']}
                            title={['Product Title', 'Product Title 2', 'Product Title 3']}
                            description={['Space for a small product description', 'Space for a small product description', 'Space for a small product description']}
                            price={[20 - (20 / 100 * 36), 20 - (20 / 100 * 1), 20]}
                            prevPrice={[20, 20, 20]}
                        />
                    </div>
                </div>
                <div className="products__row-bottom">
                    <Sidebar
                        title="Best from Farmers"
                        item={['Carrots', 'Tomatoes', 'Potatoes', 'Chicken', 'Pork']}
                        link="#"
                    />
                    <div className="col-9">
                        <ProductCard
                            discount={[36, 1, 24]}
                            img={['https://aif-s3.aif.ru/images/016/628/c17f004b480b8cbecfbc1c3d0ee0ef1e.jpg', 'https://eda.ru/img/eda/464x302i/s2.eda.ru/StaticContent/Photos/120131082151/120329185612/p_O.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRedqI92QNcIA4_L7lr8ekK59UhLOi-PYwIQ&usqp=CAU']}
                            title={['Product Title', 'Product Title 2 ', 'Product Title 3']}
                            description={['Space for a small product description', 'Space for a small product description', 'Space for a small product description']}
                            price={[20 - (20 / 100 * 36), 20 - (20 / 100 * 1), 20]}
                            prevPrice={[20, 20, 20]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;
