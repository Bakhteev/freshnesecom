import React from 'react'

const Category = () => {
    const category = [{ name: 'Category name', number: 320, }, { name: 'Category name', number: 11, }, { name: 'Category name', number: 45, }, { name: 'Category name', number: 36, }]
    return (
        <div className="catalog-sidebar__categories">
            <h2 className="catalog-sidebar__title">Categories</h2>
            <ul>
                {category.map((item, index)=>{
                    return(
                        <li key={item + index} className="catalog-sidebar__item flex">{item.name}<span className="catalog-sidebar__numder">{item.number}</span></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Category
