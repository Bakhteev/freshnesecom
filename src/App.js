import React from "react";
import './index.scss';
import Header from './components/header';
import Menu from './components/menu';
import Trends from './components/trends';
import Products from "./components/products";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Trends />
      <Products />
    </div>
  );
}

export default App;
