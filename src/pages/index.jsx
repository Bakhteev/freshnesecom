import React from 'react'
import Trends from '../components/trends'
import Products from "../components/products";
import Comments from "../components/slider";
import Headline from "../components/headline";
import Blog from "../components/blog";

const Home = ({ store, setId}) => {
    // const filter = store.items.find((item)=>item.id === 0)
    // console.log(filter)
    return (
        <main className="home">
            <Trends />
            <Products store={store} setId={setId}  />
            <Comments />
            <Headline store={store} setId={setId} />
            <Blog />
        </main>
        
    )
}


export default Home
