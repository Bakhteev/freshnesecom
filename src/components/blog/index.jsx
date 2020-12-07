import React from 'react'
import blogImg from '../../assets/blog/blog-2.png'
import blogImg3 from '../../assets/blog/blog-3.png'
import blogImg4 from '../../assets/blog/blog-4.png'
import blogImg5 from '../../assets/blog/blog-5.png'
import SectionHeader from '../section-header';
import ItemSalat from './blogItemSalat'
import { salatArr } from './const';
import {authorArr} from './const';
import BlogAutor from './blogItemSalat';

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <div className="blog__content">
                    <SectionHeader title="Read our Blog posts" btn="Go to Blog" />
                    <div className="blog__row row ">
                        <div className="col-5 blog__item blog__item--big blog-item">
                            <span className="blog__tag">Dinner tips</span>
                            <h2 className="blog__title blog__title--light">Our chef tips for a great and tasty dinner ready in 20 minutes</h2>
                            <BlogAutor {...authorArr} />
                        </div>
                        <div className="col-3 blog__item blog-item">
                            <img src={blogImg} alt="" className="blog__img blog__img--big" />
                            <span className="blog__tag">Vegetable</span>
                            <h2 className="blog__title mb-8">Which vegetable your family will love and want’s eat each day</h2>
                            <div className="blog-item__row flex">
                                <span className="blog__author">Author</span>
                                <span className="blog__date">15. 6. 2020</span>
                            </div>
                        </div>
                        <div className="col-3 blog__item blog-item">
                            {salatArr.map(item => <ItemSalat {...item} />
                            )}
                        </div>
                        <div className="col-1 blog__item">
                            <img src={blogImg3} alt="" className="blog__img" />
                            <img src={blogImg4} alt="" className="blog__img" />
                            <img src={blogImg5} alt="" className="blog__img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
