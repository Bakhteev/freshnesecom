import React from 'react'

const Productbuy = () => {
    return (
        <div className="product-page__buy">
            <div className="product__page__buy--top">
                <div>
                    <span className="product-page__price"></span>
                    <span className="product-page__prev-price"></span>
                </div>
                <label htmlFor="type">
                    <input type="text" id="type" placeholder="1" />
                    <select name="" id="">
                        <option value="">pcs</option>
                        <option value="">kgs</option>
                        <option value="">box</option>
                        <option value="">pack</option>
                    </select>
                </label>
                <button></button>
            </div>
            <div className="product__page__buy--bottom">
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default Productbuy
