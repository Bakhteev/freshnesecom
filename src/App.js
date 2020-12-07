import React from "react";
import './index.scss';
import Header from './components/header';
import Menu from './components/menu';
import Trends from './components/trends';
import Products from "./components/products";
import Comments from "./components/slider";
import Headline from "./components/headline";
import Blog from "./components/blog";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Trends />
      <Products />
      <Comments />
      <Headline />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
