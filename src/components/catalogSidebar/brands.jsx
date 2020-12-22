import React from 'react'

const Brands = () => {
    const brands = ['Filtre by brand item', 'Filtre by brand item', 'Filtre by brand item', 'Filtre by brand item',]
    return (
        <div className="catalog-sidebar__brands brands">
            <h2 className="catalog-sidebar__title">Brands</h2>
            <ul>
                {brands.map((item, index) => {
                    return (
                        <li className="catalog-sidebar__item brands__item">
                            <input type="checkbox" id={`brand ${index}`} className="brands__input" />
                            <label htmlFor={`brand ${index}`} className="brands__label">{item}</label>
                        </li>
                    )
                })}
                {/* <li className="catalog-sidebar__item brands__item">
                    <input type="checkbox" id="brand2" className="brands__input" />
                    <label htmlFor="brand2" className="brands__label">Filtre by brand item</label>
                </li>
                <li className="catalog-sidebar__item brands__item">
                    <input type="checkbox" id="brand3" className="brands__input" />
                    <label htmlFor="brand3" className="brands__label">Filtre by brand item</label>
                </li>
                <li className="catalog-sidebar__item brands__item">
                    <input type="checkbox" id="brand4" className="brands__input" />
                    <label htmlFor="brand4" className="brands__label">Filtre by brand item</label>
                </li> */}
            </ul>
        </div>
    )
}

export default Brands
