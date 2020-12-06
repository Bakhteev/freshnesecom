import React from 'react'
import Sidebar from '../sidebar';
import Items from './items'

const Products = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__row row">
                    <Sidebar
                        title="Best selling products"
                        item={['Kitchen', 'Meat and fish', 'Special nutrition', 'Pharmacy', 'Baby']}
                        link="#"
                    />
                    <div className="col-9">
                        <Items />
                    </div>
                    <Sidebar
                        title="Best from Farmers"
                        item={['Carrots', 'Tomatoes', 'Potatoes', 'Chicken', 'Pork']}
                        link="#"
                    />
                    <div className="col-9">
                        <Items />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products;
