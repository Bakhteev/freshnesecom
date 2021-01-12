import React from 'react'
import Feautures from './feautures'
import Productbuy from './productbuy'
import StructureTable from './structureTable'
import Tabs from './tabs'
import rating from '../../assets/catalog/stars4.svg';
// import { itemContent } from '../../components/productCard/const'
import ProductCard from '../../components/productCard'
import SectionHeader from '../../components/section-header'
import { feautures } from './const.js'


const ProductPage = ({ store, id, setId }) => {
    console.log(store)

    const localStore = store.items.find((item) => item.id === id)

    console.log(localStore)
    return (
        <div className="products-page">
            <div className="container">
                <div className="product-page__content padding45">
                    <div className="products-page__row products-page__row--top flex ">
                        <div className="col-6">
                            {/* <span className="">discount</span>
                            <span className="">Free shiping</span> */}
                            <img src={localStore.imgPrewiev} alt="" className="products-page__img" />
                            <img src={localStore.imgMiddle} alt="" className="products-page__img" />
                            <img src={localStore.imgBottom} alt="" className="products-page__img" />
                        </div>
                        <div className="col-6">
                            <h1 className="products-page__title">Carrots from Tomissy Farm</h1>
                            <div className="products-page__rating flex">
                                <img src={rating} alt="" className="products-page__stars" />
                                <span className="products-page__customer">(1 customer review)</span>
                            </div>
                            <p className="products-page__description">{localStore.description}</p>
                            <div className="row">
                                <ul className="col-6 products-page__list">
                                    {feautures.map((item, index) => index < 4 ? <Feautures {...item} /> : '')}
                                </ul>
                                <ul className="col-6 products-page__list">
                                    {feautures.map((item, index) => index >= 4 ? <Feautures {...item} /> : '')}
                                </ul>
                            </div>
                            <Productbuy localStore={localStore} />
                            <Tabs />
                            <StructureTable />
                        </div>
                    </div>
                    <div className="products-page__row products-page__row--bottom">
                        <SectionHeader title={'Related products'} btn={'More products'} />
                        {store.items &&
                            store.items.map((item, index) => (index < 4 ? <ProductCard {...item} col={[true, true, true, true]} key={item + index} setId={setId} /> : ''))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
