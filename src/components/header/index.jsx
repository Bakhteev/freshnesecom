import React from 'react'
import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <HeaderTop />
                    <HeaderBottom />
                </div>
            </div>
        </header>
    )
}

export default Header;
