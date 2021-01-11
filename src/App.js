import React from "react";
import './index.scss';
import Header from './components/header';
import Footer from "./components/footer";
import Home from "./pages";
import ProductPage from './pages/ProductPage';
import Catalog from './pages/catalog'
import { Route, Switch } from "react-router-dom";
import {useDispatch, useSelector, connect } from 'react-redux';
import axios from 'axios';
import setProducts from './redux/actions/product';
import ScrollToTop from "./scrollToTop";

const App = () => {
  const [id, setId] = React.useState()
  const store = useSelector(({ product, filters }) => {
    return {
      items: product.items,
    };
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get(`http://localhost:3000/database.json`).then(({ data }) => {
      dispatch(setProducts(data.products));
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/"><Home store={store} setId={setId}/></Route>
        <Route path="/froots"><Catalog store={store} setId={setId}/></Route>
        <Route path="/product"><ProductPage store={store} id={id} setId={setId}/></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default connect()(App);
