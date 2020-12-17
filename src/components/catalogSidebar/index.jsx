import React from 'react'
import Brands from './brands'
import Category from './category'
import Rating from './rating'

const CatalogSidebar = () => {
    return (
       <aside className="catalog__sidebar catalog-sidebar">
           <Category />
           <Brands />
           <Rating />
       </aside>
    )
}

export default CatalogSidebar
