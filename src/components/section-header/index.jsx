import React from 'react';

const SectionHeader = (props) => {
    return (
        <div className={`section-header flex ${props.class}`}>
            <h2 className="section-header__title">{props.title}</h2>
            <button className="section-header__btn">{props.btn}</button>
        </div>
    )
}

export default SectionHeader;
