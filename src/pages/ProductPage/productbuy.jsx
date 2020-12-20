import React from 'react'

const Productbuy = () => {
    return (
        <div className="products-page__buy">
            <div className="products-page__buy--top row">
                <div className="products-page__prices">
                    <span className="products-page__price">36.23 USD</span>
                    <span className="products-page__prev-price">48.56 USD</span>
                </div>
                <label htmlFor="type" className="products-page__label flex">
                    <input type="number" id="type" placeholder="1" className="products-page__input" />
                    <select name="" id="" className="products-page__select">
                        <option value="">pcs</option>
                        <option value="">kgs</option>
                        <option value="">box</option>
                        <option value="">pack</option>
                    </select>
                </label>
                <button className="products-page__btn flex">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1608 8H3.49414" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                        <path d="M8.82812 13.3334V2.66676" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                    </svg>
                    Add to cart
                    </button>
            </div>
            <div className="products-page__buy--bottom">
                <a className="products-page__link">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.70094 2.76016C9.33746 2.12365 10.2008 1.76605 11.1009 1.76605C12.0011 1.76605 12.8644 2.12365 13.5009 2.76016C14.1375 3.39668 14.4951 4.25999 14.4951 5.16016C14.4951 6.06034 14.1375 6.92364 13.5009 7.56016L12.6276 8.4335L7.8276 13.2335L3.0276 8.4335L2.15427 7.56016C1.51775 6.92364 1.16016 6.06034 1.16016 5.16016C1.16016 4.25999 1.51775 3.39668 2.15427 2.76016C2.79079 2.12365 3.65409 1.76605 4.55427 1.76605C5.45444 1.76605 6.31775 2.12365 6.95427 2.76016L7.8276 3.6335L8.70094 2.76016Z" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Add to my wish list
                </a>
                <a className="products-page__link">
                         <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M7.16211 1.83322H4.49544C3.75906 1.83322 3.16211 2.43018 3.16211 3.16655V5.83322C3.16211 6.5696 3.75906 7.16655 4.49544 7.16655H7.16211C7.89849 7.16655 8.49544 6.5696 8.49544 5.83322V3.16655C8.49544 2.43018 7.89849 1.83322 7.16211 1.83322Z" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.16211 9.83322H4.49544C3.75906 9.83322 3.16211 10.4302 3.16211 11.1666V13.8332C3.16211 14.5696 3.75906 15.1666 4.49544 15.1666H7.16211C7.89849 15.1666 8.49544 14.5696 8.49544 13.8332V11.1666C8.49544 10.4302 7.89849 9.83322 7.16211 9.83322Z" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.4961 11.1664H10.4961" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.1628 13.8332H10.4961" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.1628 5.83322H10.4961" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.4961 3.16644H10.4961" stroke="#E6704B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="16" height="16" fill="white" transform="translate(0.828125 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    Compare
                </a>
            </div>
        </div>
    )
}

export default Productbuy
