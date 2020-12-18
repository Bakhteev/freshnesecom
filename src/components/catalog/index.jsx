import React from 'react'
import CatalogHeader from '../catalogHeader'
import CatalogSidebar from '../catalogSidebar'
import ProductCardList from '../catalogProducts'
import {catalogArr} from './const'


const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <CatalogHeader />
                <div className="catalog__row row">
                    <div className="col-3">
                        <CatalogSidebar />
                    </div>
                    <div className="col-9">
                        {catalogArr.map((item, index) =>( index < 5 ? <ProductCardList {...item} /> : ''))}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Catalog
