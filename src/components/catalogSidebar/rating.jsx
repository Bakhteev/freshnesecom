import React from 'react'
import stars5 from '../../assets/catalog/stars5.svg'
import stars4 from '../../assets/catalog/stars4.svg'
import stars3 from '../../assets/catalog/stars3.svg'
import stars2 from '../../assets/catalog/stars2.svg'
import stars1 from '../../assets/catalog/stars1.svg'

const Rating = () => {

    const images = [stars5, stars4, stars3, stars2, stars1]
    return (
        <div className="catalog-sidebar__rating rating">
            <h2 className="catalog-sidebar__title">Rating</h2>
            <ul>
                {images.map((item, index) => {
                    return (
                        <li className="catalog-sidebar__item rating__item">
                            <input type="checkbox" id={`rating ${index}`} className="rating__input" />
                            <label htmlFor={`rating ${index}`} className="rating__label">
                                <img src={item} alt="" />
                            </label>
                        </li>
                    )

                })}
                {/* <li className="catalog-sidebar__item rating__item">
                    <input type="checkbox" id="rating2" className="rating__input" />
                    <label htmlFor="rating2" className="rating__label"><img src={stars4} alt="" /></label>
                </li>
                <li className="catalog-sidebar__item rating__item">
                    <input type="checkbox" id="rating3" className="rating__input" />
                    <label htmlFor="rating3" className="rating__label"><img src={stars3} alt="" /></label>
                </li>
                <li className="catalog-sidebar__item rating__item">
                    <input type="checkbox" id="rating4" className="rating__input" />
                    <label htmlFor="rating4" className="rating__label"><img src={stars2} alt="" /></label>
                </li>
                <li className="catalog-sidebar__item rating__item">
                    <input type="checkbox" id="rating5" className="rating__input" />
                    <label htmlFor="rating5" className="rating__label"><img src={stars1} alt="" /></label>
                </li> */}
            </ul>
        </div>
    )
}

export default Rating
