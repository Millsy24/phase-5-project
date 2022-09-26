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
import Review from './components/Review';
import SplashPage from './components/SplashPage';
import ReviewContainer from './components/ReviewContainer';
import ShoeReviewCard from './components/ShoeReviewCard';
import ReviewForm from './components/ReviewForm';

import { Routes, Route} from 'react-router-dom'
export const AppContext = createContext(null)

function App() {
  const [latestPost, setLatestPost] =useState(AppContext)
  const [shoes, setShoes] = useState([])

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState("")
  

  const [reviews, setReviews] = useState([])
  
  

useEffect(() => {
  fetch('/shoes')
  .then(r => r.json())
  .then(data => setShoes(data))
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

useEffect (() => {
  fetch('/reviews').then(r=> r.json()).then((data) => setReviews(data))
},[])




function getReviews () {
  fetch('/reviews')
  .then(r => r.json())
  .then((data) => setReviews(data))
}

 
  
 const getData = () => { 
  fetch('/shoes')
  .then(r => r.json())
  .then(data => setShoes(data))

}





// if (!isAuthenticated) return <SplashPage/>



  return (
    
    <div className="App">
      <AppContext.Provider value={{latestPost, setLatestPost}}>
      <Routes>
        <Route path = "/" element = {<SplashPage/>}/>
        <Route path ='/shoes' element={<ShoeContainer shoes = {shoes} setCurrentUser={setCurrentUser}/> }/>
        <Route path ='/createshoe' element = {<ShoeForm/>}/>
        <Route path ='/latestshoe' element ={<LatestShoe/>}/>
        <Route path = '/signup' element = {<SignUp setCurrentUser={setCurrentUser}/>}/>
        <Route path = '/login' element = {<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path = '/reviews' element = {<ReviewContainer reviews = {reviews} getReviews ={getReviews}/>}/>
        <Route path = '/shoes-with-images/:id' element = {<ShoeReviewCard currentUser = {currentUser} reviews = {reviews} getReviews = {setReviews}/>}/>
        <Route path = '/reviewform' element= {<ReviewForm/>}/>
      </Routes>
      </AppContext.Provider>

      
    </div>
  );
}

export default App;
