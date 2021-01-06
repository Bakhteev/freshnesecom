import React from 'react'
import CatalogTop from './catalogHeaderTop'
import CatalogMiddle from './catalogHeaderMiddle'
import CatalogBottom from './catalogHeaderBottom'

const CatalogHeader = ({viewMode, store}) => {
    console.log(viewMode)
    return (
        <div className="catalog__header catalog-header">
            <CatalogTop viewMode={viewMode} store={store}/>
            <CatalogMiddle />
            <CatalogBottom />
        </div>
    )
}

export default CatalogHeader
