import React from 'react'
import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';
import Menu from '../menu';
import Navigation from '../navigation';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <HeaderTop />
                    <HeaderBottom />
                </div>
            </div>
            <Menu />
            <Navigation />
        </header>
        
    )
}

export default Header;
