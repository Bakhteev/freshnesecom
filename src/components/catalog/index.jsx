import React from 'react'
import CatalogHeader from '../catalogHeader'
import CatalogSidebar from '../catalogSidebar'
import ProductCardList from '../catalogProducts'


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
                        <ProductCardList />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Catalog
