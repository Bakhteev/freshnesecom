import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <ul className="navigation__list flex">
          <li className="navigation__item">
            <NavLink
              exact
              to="/"
              activeStyle={{
                display: 'none',
              }}
              className="navigation__link"
            >
              Homepage
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="activeLink"
              to="/froots"
              className="navigation__link"
            >
              Froot and vegetables
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="activeLink"
              to="/product"
              className="navigation__link"
            >
              Carrots from Tomissy Farm
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
