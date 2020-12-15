import React from 'react'

const Category = () => {
    return (
        <div className="catalog-sidebar__categories">
            <h2 className="catalog-sidebar__title">Categories</h2>
            <ul>
                <li className="catalog-sidebar__item flex">Category name<span className="catalog-sidebar__numder">320</span></li>
                <li className="catalog-sidebar__item flex">Category name<span className="catalog-sidebar__numder">11</span></li>
                <li className="catalog-sidebar__item flex">Category name<span className="catalog-sidebar__numder">45</span></li>
                <li className="catalog-sidebar__item flex">Category name<span className="catalog-sidebar__numder">36</span></li>
            </ul>
        </div>
    )
}

export default Category
