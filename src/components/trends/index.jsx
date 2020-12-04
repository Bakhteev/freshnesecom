import React from 'react'

const Trends = () => {
    return (
        <section className="trends">
            <div className="container">
                <div className="trends__row row">
                    <aside className="col-3 trends__sidebar sidebar">
                        <h2 className="sidebar__title">Category menu</h2>
                        <ul className="sidebar__menu">
                            <li className="sidebar__item"><a href="#" className="link">Bakery</a></li>
                            <li className="sidebar__item"><a href="#" className="link">Fruit and vegetables</a></li>
                            <li className="sidebar__item"><a href="#" className="link">Meat and fish</a></li>
                            <li className="sidebar__item"><a href="#" className="link">Drinks</a></li>
                            <li className="sidebar__item"><a href="#" className="link">Kitchen</a></li>
                        </ul>
                        <button className="sidebar__btn">More categories</button>
                    </aside>
                    <div className="col-9 row">
                        <div className="col-5 trends__item">
                            <h3 className="trends__suptitle">Banner subfocus</h3>
                            <h2 className="trends__title">Space for heading</h2>
                            <button className="trends__btn">Read recepies</button>
                        </div>
                        <div className="col-5 trends__item">
                            <h3 className="trends__suptitle">Banner subfocus</h3>
                            <h2 className="trends__title">Space for heading</h2>
                            <button className="trends__btn">Read recepies</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trends
