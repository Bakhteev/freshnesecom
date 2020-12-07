import React from 'react'
import FooterBottom from './footerBottom';
import FooterTop from './footerTop';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <FooterTop />
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer
