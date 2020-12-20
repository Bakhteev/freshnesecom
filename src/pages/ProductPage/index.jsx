import React from 'react'
import Feautures from './feautures'
import Productbuy from './productbuy'
import StructureTable from './structureTable'
import Tabs from './tabs'
import rating from '../../assets/catalog/stars4.svg';
import { itemContent } from '../../components/productCard/const'
import ProductCard from '../../components/productCard'
import SectionHeader from '../../components/section-header'

const ProductPage = () => {
    return (
        <div className="products-page">
            <div className="container">
                <div className="product-page__content padding45">
                    <div className="products-page__row products-page__row--top flex ">
                        <div className="col-6">
                            {/* <span className="">discount</span>
                        <span className="">Free shiping</span> */}
                            <img src="https://2smart.ru/wp-content/uploads/2018/09/8875386638_1712425859-e1536093381914.jpg" alt="" className="products-page__img" />
                            <img src="https://2smart.ru/wp-content/uploads/2018/09/8875386638_1712425859-e1536093381914.jpg" alt="" className="products-page__img" />
                            <img src="https://2smart.ru/wp-content/uploads/2018/09/8875386638_1712425859-e1536093381914.jpg" alt="" className="products-page__img" />
                        </div>
                        <div className="col-6">
                            <h1 className="products-page__title">Carrots from Tomissy Farm</h1>
                            <div className="products-page__rating flex">
                                <img src={rating} alt="" className="products-page__stars" />
                                <span className="products-page__customer">(1 customer review)</span>
                            </div>
                            <p className="products-page__description">Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.</p>
                            <Feautures />
                            <Productbuy />
                            <Tabs />
                            <StructureTable />
                        </div>
                    </div>
                    <div className="products-page__row products-page__row--bottom">
                        <SectionHeader title={'Related products'} btn={'More products'} />
                        {itemContent.map((item, index) => (index < 4 ? <ProductCard {...item} col={[true, true, true, true]} /> : ''))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
