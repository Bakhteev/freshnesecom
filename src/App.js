import React from "react";
import './index.scss';
import Header from './components/header';
import Footer from "./components/footer";
import Home from "./pages";
import FrootAndVegetables from './pages/frootsAndVegetables';
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/froot" component={FrootAndVegetables} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
