import React from 'react'
import './App.css'
import ShoeContainer from './components/ShoeContainer';
import ShoeCard from './components/ShoeCard';
import { createContext } from 'react';
import { useState } from 'react';
import ShoeForm from './components/ShoeForm';
import LatestShoe from './components/LatestShoe';

import { Routes, Route} from 'react-router-dom'
export const AppContext = createContext(null)

function App() {
  const [latestPost, setLatestPost] =useState(AppContext)
  return (
    
    <div className="App">
      <AppContext.Provider value={{latestPost, setLatestPost}}>
      <Routes>
        <Route path='/shoecontainer' element={<ShoeContainer/>}/>
        <Route path ='/shoes' element={<ShoeCard/>}/>
        <Route path ='/createshoe' element = {<ShoeForm/>}/>
        <Route path ='/latestshoe' element ={<LatestShoe/>}/>
      </Routes>
      </AppContext.Provider>

      <h1>HELLO MIKAYLA THIS IS THE HOME PAGE</h1>
    </div>
  );
}

export default App;
