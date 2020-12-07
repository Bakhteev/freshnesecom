import React from "react";
import './index.scss';
import Header from './components/header';
import Menu from './components/menu';
import Footer from "./components/footer";
import Home from "./pages";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
