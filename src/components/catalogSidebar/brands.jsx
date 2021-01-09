import React from 'react'

const Brands = () => {
    const brands = ['Filtre by brand item', 'Filtre by brand item', 'Filtre by brand item', 'Filtre by brand item',]
    return (
        <div className="catalog-sidebar__brands brands">
            <h2 className="catalog-sidebar__title">Brands</h2>
            <ul>
                {brands.map((item, index) => {
                    return (
                        <li key={item + index} className="catalog-sidebar__item brands__item">
                            <input type="checkbox" id={`brand ${index}`} className="brands__input" />
                            <label htmlFor={`brand ${index}`} className="brands__label">{item}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Brands
