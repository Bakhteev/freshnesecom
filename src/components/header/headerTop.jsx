import React from 'react'

const HeaderTop = () => {
    return (
        <div className="header__top flex">
            <div className="header__left">
                <ul className="header__contacts flex">
                    <li className="header__item">
                        <a href="#" className="header__link link">Chat with us</a>
                    </li>
                    <li className="header__item">
                        <a href="tel:+420 336 775 664" className="header__link header__link--black link">+420 336 775 664</a>
                    </li>
                    <li className="header__item">
                        <a href="memail:info@freshnesecom.com" className="header__link header__link--black link">info@freshnesecom.com</a>
                    </li>
                </ul>
            </div>
            <div className="header__right">
                <ul className="header__info flex">
                    <li className="header__item">
                        <a href="#" className="header__link link">Blog</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link link">About Us</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link link">Careers</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop
