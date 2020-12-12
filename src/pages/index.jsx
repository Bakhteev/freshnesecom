import React from 'react'
import Trends from '../components/trends'
import Products from "../components/products";
import Comments from "../components/slider";
import Headline from "../components/headline";
import Blog from "../components/blog";

const Home = () => {
    return (
        <main className="home">
            <Trends />
            <Products />
            <Comments />
            <Headline />
            <Blog />
        </main>
        
    )
}


export default Home
