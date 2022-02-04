import React from 'react';
import logo from './logo.svg';
import './App.css';
import Core from './Core';
import Product from './Product';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path ="/" exact>
        <Core/>
      </Route>
      <Route path="/product/:id" exact>
        <Product/>
      </ Route>
    </div>
  );
}

export default App;
