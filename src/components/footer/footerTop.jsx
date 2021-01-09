import React from 'react'
import FooterItem from './footerItem'
import { footerArr } from './const';

const FooterTop = () => {
    return (
        <div className="footer__top row">
            {footerArr.map((item, index) => (<FooterItem {...item} key={item + index} />))}
        </div>
    )
}

export default FooterTop
