import React, { useEffect } from 'react'
import './App.css'
import ShoeContainer from './components/ShoeContainer';
import ShoeCard from './components/ShoeCard';
import { createContext } from 'react';
import { useState } from 'react';
import ShoeForm from './components/ShoeForm';
import LatestShoe from './components/LatestShoe';
import SignUp from './components/SignUp';
import Login from './components/Login';

import { Routes, Route} from 'react-router-dom'
export const AppContext = createContext(null)

function App() {
  const [latestPost, setLatestPost] =useState(AppContext)
  const [shoes, setShoes] = useState([])

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

useEffect(() => {
  fetch('/shoes').then(r => r.json()).then(data => setShoes(data))
}, [])


useEffect(() => {
  fetch("/me").then((res) => {
    if (res.ok) {
      res.json().then((user) => {
        setCurrentUser(user)
        setIsAuthenticated(true)
      })
    }
  })
}, [])








  return (
    
    <div className="App">
      <AppContext.Provider value={{latestPost, setLatestPost}}>
      <Routes>
        <Route path ='/shoes' element={<ShoeContainer shoes = {shoes} setCurrentUser={setCurrentUser}/> }/>
        <Route path ='/createshoe' element = {<ShoeForm/>}/>
        <Route path ='/latestshoe' element ={<LatestShoe/>}/>
        <Route path = '/signup' element = {<SignUp setCurrentUser={setCurrentUser}/>}/>
        <Route path = '/login' element = {<Login setCurrentUser={setCurrentUser}/>}/>
      </Routes>
      </AppContext.Provider>

      <h1>HELLO MIKAYLA THIS IS THE HOME PAGE</h1>
    </div>
  );
}

export default App;
