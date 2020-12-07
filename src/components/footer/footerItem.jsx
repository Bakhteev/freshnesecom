import React from 'react'

const FooterItem = ({ title, link, text }) => {
    return (
        <div className="col-3 footer__column">
            <h3 className="footer__title">{title}</h3>
            <ul className="footer__list ">
                {text.map(text=>{
                    return(
                        <li className="footer__item"><a href={link} className="link">{text}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FooterItem
