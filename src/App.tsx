import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import { Suspense } from 'react';
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Register from "./components/login/Register";
import AddProducts from "./components/seller/AddProducts";
import AddCategories from "./components/seller/AddCategories";
import { Provider } from "react-redux";
import Cart from './components/cart/Cart'
import configStore from "./components/redux/store/store";

const store = configStore()
const Login = React.lazy(()=> import("./components/login/Login"))
const About = React.lazy(()=> import("./components/about/About"))
const ProductDetails = React.lazy(()=> import("./components/product/Product"))
const Products = React.lazy(()=> import("./components/product/Products"))
const Header = React.lazy(()=> import("./components/core/Header"))
const Seller = React.lazy(()=> import("./components/seller/Seller"))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Suspense fallback = {<h1>Loading...</h1>}>
      <Header />
      <Routes>
        <Route path='/about' Component={About} />
        <Route path='/register' Component={Register} />
        <Route path='/cart' Component={Cart} />
        <Route path='/login' Component={Login} />
        <Route path='/' Component={Login} />
        <Route path='/product/:id' Component={ProductDetails} />
        <Route path='/products' Component={Products} />
        <Route path='/seller' Component={Seller} />
        <Route path='/AddProducts' Component={AddProducts} />
        <Route path='/AddCategories' Component={AddCategories} />
        <Route path='*' Component={PageNotFound} />
        </Routes>
        </Suspense>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
