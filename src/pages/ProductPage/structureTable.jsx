import React from 'react'
import { tableArr } from './const'

const StructureTable = () => {
    const tableHeader = ['Vitamins', 'Quantity', '% DV']
    return (
        <div className="product-page__structure">
            <div className="product-page__table table">
                <div className="table__header">
                    <ul className="table__list flex">
                        {tableHeader.map(item => {
                            return (
                                <li key={item} className="table__item col-3">{item}</li>
                            )
                        })}
                    </ul>
                </div>
                {tableArr.map(item => {
                    return (
                        <div key={item} className="table__row flex">
                            <span className="table__item col-3">{item.Vitamin}</span>
                            <span className="table__item col-3">{item.Quantity}</span>
                            <span className="table__item col-3">{item.DV}%</span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default StructureTable
