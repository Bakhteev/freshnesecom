import React from 'react'

const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__header catalog-header">
                    <div className="catalog-header__top row">
                        <h1 className="catalog__title"></h1>
                        <div className="catalog-header__view">
                            <span className="catalog-header__item">
                                Grid view

                            </span>
                            <span className="catalog-header__item">
                                List view

                            </span>
                            <span className="catalog-header__counter">
                                Products
                                
                            </span>
                        </div>
                    </div>
                    <div className="catalog-header__middle row"></div>
                    <div className="catalog-header__bottom row"></div>
                </div>
            </div>
        </section>
    )
}

export default Catalog
