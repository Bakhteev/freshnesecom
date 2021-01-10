import React from 'react'
import stars5 from '../../assets/catalog/stars5.svg'
import stars4 from '../../assets/catalog/stars4.svg'
import stars3 from '../../assets/catalog/stars3.svg'
import stars2 from '../../assets/catalog/stars2.svg'
import stars1 from '../../assets/catalog/stars1.svg'

const Rating = () => {
    // console.log(<input type="checkbox" className="rating__input" />)
    const images = [stars5, stars4, stars3, stars2, stars1]
    return (
        <div className="catalog-sidebar__rating rating">
            <h2 className="catalog-sidebar__title">Rating</h2>
            <ul>
                {images.map((item, index) => {
                    return (
                        <li key={item + index} className="catalog-sidebar__item rating__item">
                            <input type="checkbox" id={`rating ${index}`} className="rating__input" />
                            <label htmlFor={`rating ${index}`} className="rating__label">
                                <img src={item} alt="" />
                            </label>
                        </li>
                    )

                })}
            </ul>
        </div>
    )
}

export default Rating
