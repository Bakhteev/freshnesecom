import React from 'react'

const View = ({ text, icon, counter }) => {
    console.log(text)
    return (
        <React.Fragment>
            <button className="catalog-header__item">
                <span>{text}</span>
                {icon}
            </button>
            <button className="catalog-header__item">
                <span>{text}</span>
                {icon}
            </button>
            <button className="catalog-header__item catalog-header__item-counter">
                <span>{text}</span>
                <span>{counter}</span>
            </button>
        </React.Fragment>
    )
}

export default View
