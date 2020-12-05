import React from 'react'
import Sidebar from '../sidebar'

const Trends = () => {
    return (
        <section className="trends">
            <div className="container">
                <div className="trends__row row">
                    {/* <Sidebar /> */}
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
