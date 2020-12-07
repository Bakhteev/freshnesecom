import React from 'react';
import { authorArr } from './const';
import BlogAutor from './autor';

const ItemSalat = ({description}) => {
    return (
        <div className="blog-item__inner">
            <p className="blog__description">{description}</p>
            {authorArr.map((item, index) => (index > 3 ? <BlogAutor {...item} /> : ''))}
        </div>
    )
}

export default ItemSalat
