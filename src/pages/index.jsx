import React from 'react'
import Trends from '../components/trends'
import Sidebar from "../components/sidebar";
import {sidebarObj} from '../components/sidebar/const';

const Home = () => {
    return (
        <div>
            {sidebarObj.map(item =>{
            return (
                <Sidebar {...item} key={item.title} /> 
            )
            })}
        </div>
        
    )
}


export default Home
