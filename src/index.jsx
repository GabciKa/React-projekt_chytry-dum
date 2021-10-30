import React from 'react';
import { render } from 'react-dom';
import './style.css';
import "./smartHomeData";

import smartHomeData from "./smartHomeData";

import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => (
  <>
    <div class="container">
      <Header title="Chytrý dům"/>
      <Dashboard data={smartHomeData}/>
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
