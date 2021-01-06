import React from 'react'
import Brands from './brands'
import Category from './category'
import Rating from './rating'
import Range from './range'

const CatalogSidebar = () => {
    return (
       <aside className="catalog__sidebar catalog-sidebar">
           <Category />
           <Brands />
           <Rating />
           <Range />
       </aside>
    )
}

export default CatalogSidebar
