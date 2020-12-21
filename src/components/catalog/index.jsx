import React from 'react'
import CatalogHeader from '../catalogHeader'
import CatalogSidebar from '../catalogSidebar'
import ProductCardList from '../catalogProducts/productCardList'
import {catalogArr} from './const'
import ProductCardGrid from '../catalogProducts/productCardGrid'
import Pagination from '../pagination'


const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <CatalogHeader />
                <div className="catalog__row row">
                    <div className="col-3">
                        <CatalogSidebar />
                    </div>
                    <div className="col-9 catalog__item row">
                        {/* {catalogArr.map((item, index) =>( index < 5 ? <ProductCardList {...item} /> : ''))} */}
                        {catalogArr.map((item, index) => (index < 9 ? <ProductCardGrid {...item} /> : ''))}
                    </div>
                    
                </div>
                <Pagination />
            </div>
        </section>
    )
}

export default Catalog
