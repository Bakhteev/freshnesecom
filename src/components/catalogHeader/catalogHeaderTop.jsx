import React from 'react'
import View from './view'
import { viewArr} from './const'

function CatalogHeaderTop() {
    return (
        <div className="catalog-header__top row">
            <h1 className="catalog-header__title">Fruit and vegetables</h1>
            <div className="catalog-header__view flex">
                <View/>
            </div>
            
        </div>
    )
}

export default CatalogHeaderTop
