import React from 'react'
import CatalogHeader from '../catalogHeader'
import CatalogSidebar from '../catalogSidebar'


const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <CatalogHeader />
                <div className="catalog__row row">
                    <CatalogSidebar />
                </div>
            </div>
        </section>
    )
}

export default Catalog
