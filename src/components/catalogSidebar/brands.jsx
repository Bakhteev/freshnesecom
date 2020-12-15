import React from 'react'

const Brands = () => {
    return (
        <div className="catalog-sidebar__brands brands">
            <h2 className="catalog-sidebar__title">Brands</h2>
            <ul>
                <li className="catalog-sidebar__item brands__item">
                    <input type="checkbox" id="brand1" className="brands__input"/>
                    <label htmlFor="brand1" className="brands__label">Filtre by brand item</label>
                </li>
                <li className="catalog-sidebar__item brands__item">
                    <input type="checkbox" id="brand2" className="brands__input"/>
                    <label htmlFor="brand2" className="brands__label">Filtre by brand item</label>
                </li>
                <li className="catalog-sidebar__item brands__item">
                    <input type="checkbox" id="brand3" className="brands__input"/>
                    <label htmlFor="brand3" className="brands__label">Filtre by brand item</label>
                </li>
                <li className="catalog-sidebar__item brands__item">
                    <input type="checkbox" id="brand4" className="brands__input"/>
                    <label htmlFor="brand4" className="brands__label">Filtre by brand item</label>
                </li>
            </ul>
        </div>
    )
}

export default Brands
