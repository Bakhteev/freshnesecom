import React, {useState} from 'react'

const CatalogMiddle = () => {
    const [drop, setDrop] = useState(false)

    const handleClick = () =>{
        setDrop(drop ? false : true)
    }
    return (
        <div className="catalog-header__middle row ">
            <div className="catalog-header__item radios flex">
                <input type="radio" id="radio1" name="filter" className="radios__input" />
                <label htmlFor="radio1" className="radios__label">Filtre text</label>
                <input type="radio" id="radio2" name="filter" className="radios__input" />
                <label htmlFor="radio2" className="radios__label">Filtre text</label>
            </div>
            <div className="catalog-header__item checkboxes flex">
                <input type="checkbox" id="checkbox" name="filter" className="checkboxes__input" />
                <label htmlFor="checkbox" className="checkboxes__label">Filtre</label>
                <span className="checkboxes__tag">Nbm</span>
            </div>
            <div className="catalog-header__item checkboxes flex">
                <input type="checkbox" id="checkbox2" name="filter" className="checkboxes__input" />
                <label htmlFor="checkbox2" className="checkboxes__label">Filtre</label>
                <span className="checkboxes__tag">Nbm</span>
            </div>
            <div className="catalog-header__item select flex">
                <input type="checkbox" id="checkbox3" name="filter" className="select__input" />
                <label htmlFor="checkbox3" className="select__label">Filtre</label>
                <span className="select__tag">12</span>
                <h4 onClick={() => handleClick()} className={`select__title ${drop === true ? 'active' : ''}`}>
                    Select
                    <ul className={`select__list ${drop === true ? 'active' : ''}`}>
                        <li className="select__item">Select</li>
                        <li className="select__item">Select</li>
                        <li className="select__item">Select</li>
                    </ul>
                </h4>
            </div>
        </div>
    )
}

export default CatalogMiddle
