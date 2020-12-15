import React from 'react'

const View = (props) => {
    return (
        <React.Fragment>
            <button className="catalog-header__item">
                <span>{props.text}</span>
                {props.icon}
            </button>
            <button className="catalog-header__item">
                <span>{props.text}</span>
                {props.icon}
            </button>
            <button className="catalog-header__item catalog-header__item-counter">
                <span>{props.text}</span>
                <span>{props.counter}</span>
            </button>
        </React.Fragment>
    )
}

export default View
