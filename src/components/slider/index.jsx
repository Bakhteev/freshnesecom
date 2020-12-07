import React from 'react';
import Card from './card';
import SectionHeader from '../section-header';


const Comments = () => {
    return (
        <section className="comments">
            <div className="container">
                <div className="comments__content">
                    <div className="padding45">
                        <SectionHeader title="Our customers says" btn="Button" />
                    </div>
                    <Card />
                </div>

            </div>
        </section >

    )
}

export default Comments
