import React from 'react'
import View from './view'


function CatalogHeaderTop({viewMode, store}) {
    return (
        <div className="catalog-header__top row">
            <h1 className="catalog-header__title">Fruit and vegetables</h1>
            <div className="catalog-header__view flex">
                <View viewMode={viewMode} store={store}/>
            </div>
            
        </div>
    )
}

export default CatalogHeaderTop
