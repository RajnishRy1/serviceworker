import React from 'react';
import logo from './logo.svg';
import './App.css';
import Core from './Core';
// import Product from './Product';
import {Route} from 'react-router-dom';
import Scan from './Components/Scan/Scan';
import Pricecheck from './Components/Pricecheck/Pricecheck';
import Navlist from './Components/Navigation/Navlist';

function App() {
  return (
    <div>
      <Route path ="/" exact>
        <Core/>
      </Route>
      <Route path="/scan">
        <Scan/>
      </Route>
      <Route path="/product" exact>
        {/* <Product/> */}
        <Pricecheck/>
      </ Route>
    </div>
  );
}

export default App;
