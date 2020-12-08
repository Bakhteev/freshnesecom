import React from 'react'
import Sidebar from '../sidebar'

const Trends = () => {
    return (
        <section className="trends">
            <div className="container">
                <div className="trends__row row">
                    <div className="col-3">
                        <Sidebar
                            title='Category menu'
                            item={['Bakery', 'Fruit and vegetables', 'Meat and fish', 'Drinks', 'Kitchen']}
                            link='#' />
                    </div>
                    <div className="col-9 trends__items row">
                        <div className="col-5 trends__item">
                            <div className="trends__inner">
                                <h3 className="trends__suptitle">Banner subfocus</h3>
                                <h2 className="trends__title">Space for heading</h2>
                                <button className="trends__btn">Read recepies</button>
                            </div>
                        </div>
                        <div className="col-5 trends__item">
                            <div className="trends__inner">
                                <h3 className="trends__suptitle">Banner subfocus</h3>
                                <h2 className="trends__title">Space for heading</h2>
                                <button className="trends__btn">Read recepies</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trends
