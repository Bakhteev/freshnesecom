import React from 'react'
import CatalogTop from './catalogHeaderTop'
import CatalogMiddle from './catalogHeaderMiddle'
import CatalogBottom from './catalogHeaderBottom'

const CatalogHeader = () => {
    return (
        <div className="catalog__header catalog-header">
            <CatalogTop />
            <CatalogMiddle />
            <CatalogBottom />
        </div>
    )
}

export default CatalogHeader
