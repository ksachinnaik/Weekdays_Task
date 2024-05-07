import React from 'react';
import './App.css';
import Products from './components/Products';
import Filters from './components/Filters';


const App = () => {
  return (
    <div className='app'>
    <Filters/>
    <Products/>
    </div>
  )
}

export default App

