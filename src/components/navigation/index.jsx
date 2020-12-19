import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    // const [navigation, setNavigation] = useState(false)
    // const handelClick =() =>{
    //     setNavigation(navigation ? false : true)
    // }
    return (
        <nav className="navigation">
            <div className="container">
                <ul className="navigation__list flex">
                    <li className="navigation__item">
                        <NavLink to="/" className="navigation__link">Homepage</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink activeClassName="activeLink" to="/froots" className="navigation__link">Froot and vegetables</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink activeClassName="activeLink" to="/product" className="navigation__link">Carrots from Tomissy Farm</NavLink>
                    </li>
                    {/* <li className="navigation__item">
                        <Link to="/product">Carrots from Tomissy Farm</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
