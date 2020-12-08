import React from 'react'


const Sidebar = ({ title, item, link }) => {
    return (
            <aside className="sidebar" >
                <h2 className="sidebar__title">{title}</h2>
                <ul className="sidebar__menu">
                {item.map(item =>{
                    return(
                    <li className="sidebar__item">
                        <a href={link} className="link">
                            {item}
                        </a>
                    </li>
                    )
                })}
                </ul>
                <button className="sidebar__btn">More categories</button>
            </aside>
    )
}

export default Sidebar;
