import React from 'react'
import Items from '../products/items'
import SectionHeader from '../section-header'

const Headline = () => {
    return (
        <section className="headline">
            <div className="container">
                <div className="headline__content">
                    <SectionHeader title="Section Headline"/>
                    <div className="headline__row row">
                        <Items />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Headline
