import React from "react";
import './index.scss';
import Header from './components/header';
import Footer from "./components/footer";
import Home from "./pages";
import FrootsAndVegetables from './pages/frootsAndVegetables';
import ProductPage from './pages/ProductPage/Product';
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/froots" component={FrootsAndVegetables} />
        <Route path="/product" component={ProductPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
