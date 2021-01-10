import React from 'react'

const Feautures = ({ type, text, underlined, green }) => {
    return (
        <li className="products-page__item flex">
            <span className="col-6 products-page__item">{type}</span>
            {
                underlined ? <span className="col-6 products-page__item--underlined products-page__item--black">{text}</span> : <span className="col-6 products-page__item--black">{text}</span>,
                green ? <span className="col-6 products-page__item--green">{text}</span> : <span className="col-6 products-page__item--black">{text}</span>,
                underlined && green ? <span className="col-6 products-page__item--underlined products-page__item--green">{text}</span> : <span className="col-6 products-page__item--black">{text}</span>
            }
        </li>
    )
}

export default Feautures
