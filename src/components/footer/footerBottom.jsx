import React from 'react'
import { footerLinks } from './const'

const FooterBottom = () => {
    return (
        <div className="footer__bottom">
            <h3 className="footer__title">Product tags</h3>
            <div className="row">
                {footerLinks.map(item => {
                    return (
                        <a href={item.link} className="footer__link">{item.text}</a>
                    )
                })}

            </div>
        </div>
    )
}

export default FooterBottom
