import React from 'react'

const HeaderTop = () => {
    return (
        <div className="header__top">
            <div className="header__contacts">
                <ul>
                    <li>
                        <a href="" className="header__link">Chat with us</a>
                    </li>
                    <li>
                        <a href="" className="header__link header__link--black">+420 336 775 664</a>
                    </li>
                    <li>
                        <a href="" className="header__link header__link--black">info@freshnesecom.com</a>
                    </li>
                </ul>
            </div>
            <div className="header__info">
                <ul>
                    <li>
                        <a href="" className="header__link">Blog</a>
                    </li>
                    <li>
                        <a href="" className="header__link header__link--black">About Us</a>
                    </li>
                    <li>
                        <a href="" className="header__link header__link--black">Careers</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop
