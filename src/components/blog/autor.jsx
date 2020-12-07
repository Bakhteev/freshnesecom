import React from 'react'

const BlogAutor = ({ boolean, img, author, date }) => {
    if (boolean) {
        return (
            <div className="blog-item__row flex">
                <img src={img} alt="" className="blog__icon" />
                <span className="blog__author blog__autor--light">{author}</span>
                <span className="blog__date blog__date--light">{date}</span>
            </div>
        )
    }
    else
        return (
            <div className="blog-item__row flex">
                <span className="blog__author">{author}</span>
                <span className="blog__date">{date}</span>
            </div>
        )
}

export default BlogAutor
