import React from 'react'
import {menuText} from './const'

const Menu = () => {
    return (
        <section className="menu">
            <div className="container">
                <div className="menu__row row">
                        {menuText.map(item =>{
                            return( 
                            <ul 
                                key={item.title}
                                className="menu__list">
                                <li
                                    className="menu__item">
                                    {item.title}
                                </li>
                                <li 
                                    className="menu__item">
                                    {item.item}
                                </li>
                            </ul>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default Menu
