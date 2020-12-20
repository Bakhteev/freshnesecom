import React from 'react'

const StructureTable = () => {
    return (
        <div className="product-page__structure">
            <table className="product-page__table table">
                <tr className="table__row flex">
                    <th className="table__header">Vitamins</th>
                    <th className="table__header">Quantity</th>
                    <th className="table__header">% DV</th>
                </tr>
                <tr className="table__row flex">
                    <td className="table__item">Vitamin A equiv.</td>
                    <td className="table__item">735 μg</td>
                    <td className="table__item">104 %</td>
                </tr>
                <tr className="table__row flex">
                    <td className="table__item"></td>
                    <td className="table__item"></td>
                    <td className="table__item"></td>
                </tr>
                <tr className="table__row flex">
                    <td className="table__item"></td>
                    <td className="table__item"></td>
                    <td className="table__item"></td>
                </tr>
            </table>
        </div>
    )
}

export default StructureTable
