import React, { useState } from 'react'
import { tabsHeader} from './const'

const Tabs = () => {

    const [tab, setTab] = useState(0)
    const handleClick = (index) => {
        setTab(index)
    };
    return (
        <div className="products-page__tabs tabs">
            <ul className="tabs__header flex">
                {tabsHeader.map((item, index) => {
                    if (item.boolean) {
                        return (
                            <li key={item + index} onClick={() => handleClick(index)} className={`tabs__tab flex ${tab === index ? 'active' : ''}`}>{item.text}<span className="tabs__number">{item.number}</span></li>
                        )
                    }
                    else {
                        return (
                            <li key={item + index} onClick={() => handleClick(index)} className={`tabs__tab flex ${tab === index ? 'active' : ''}`}>{item.text}</li>
                        )
                    }
                })}
            </ul>
            <div className={`tabs__item ${tab === 0 ? '' : 'disabled'}`}>
                <h4 className="tabs__title">Origins</h4>
                <p className="tabs__description">We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</p>
                <h4 className="tabs__title">How to cook</h4>
                <p className="tabs__description">From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
                <h4 className="tabs__title">Full of Vitamins!</h4>
            </div>
            <div className={`tabs__item ${tab === 1 ? '' : 'disabled'}`}>
                <h4 className="tabs__title">Reviews</h4>
                <p className="tabs__description">We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</p>
                <h4 className="tabs__title">How to cook</h4>
                <p className="tabs__description">From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
                <h4 className="tabs__title">Full of Vitamins!</h4>
            </div>
            <div className={`tabs__item ${tab === 2 ? '' : 'disabled'}`}>
                <h4 className="tabs__title">Questions</h4>
                <p className="tabs__description">We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</p>
                <h4 className="tabs__title">How to cook</h4>
                <p className="tabs__description">From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
                <h4 className="tabs__title">Full of Vitamins!</h4>
            </div>
        </div>
    )
}

export default Tabs
