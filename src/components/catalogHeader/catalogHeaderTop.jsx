import React from 'react'
import View from './view'
import { viewArr} from './const'

function CatalogHeaderTop() {
    return (
        <div className="catalog-header__top row">
            <h1 className="catalog__title"></h1>
            <div className="catalog-header__view">
                <View {...viewArr} />
            </div>
            
        </div>
    )
}

export default CatalogHeaderTop
