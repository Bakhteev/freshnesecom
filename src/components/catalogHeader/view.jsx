import React, {useState} from 'react'
import { frootArr } from './const'

const View = () => {
    const [active, setactive] = useState(true)

    const handleClick = () =>{
        setactive(active ? false : true)
    }
    return (
        <React.Fragment>
            <div onClick={() => handleClick()} className="catalog-header__btn flex">
                <svg className={`catalog-header__icon ${active === true ? 'active' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z" stroke="" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.33301 8H14.6663" stroke="" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 1.33331V14.6666" stroke="" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className={`catalog-header__text ${active === true ? 'active' : ''}`}>Grid view</span>
            </div>
            <div onClick={() => handleClick()} className="catalog-header__btn flex">
                <svg className={`catalog-header__icon ${active === false ? 'active' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z" stroke="" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.33301 4.66663H14.6663" stroke="" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.33301 8H14.6663" stroke="" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.33301 11.3333H14.6663" stroke="" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className={`catalog-header__text ${active === false ? 'active' : '' }`}>List view</span>
            </div>
            <div className="catalog-header__btn"><span className="catalog-header__number">{frootArr.length}</span><span className="catalog-header__text">Products</span></div>
        </React.Fragment>
    )
}

export default View
