import React from 'react'
import Items from './items'

const Products = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__row row">
                    <Items />
                </div>
                    <Items />
            </div>
        </section>
    )
}

export default Products;
