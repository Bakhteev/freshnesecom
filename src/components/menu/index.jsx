import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { menuText } from './const'

const Menu = () => {
  const [dropdown, setDropdown] = useState()
  const handleClick = (index) => {
    setDropdown(dropdown === index ? '' : index)
  }
  return (
    <section className="menu">
      <div className="container">
        <div className="menu__row row">
          {menuText.map((item, index) => {
            return (
              <h3
                key={item + index}
                onClick={() => handleClick(index)}
                className={`menu__title ${dropdown === index ? 'active' : ''}`}
              >
                {item.title}
                <ul
                  className={`menu__list ${
                    dropdown === index ? 'active' : ''
                  } `}
                >
                  {item.item.map((item) => {
                    return (
                      <li key={item} className="menu__item">
                        <Link to="/froots" className="menu__link">
                          {item}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </h3>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Menu
