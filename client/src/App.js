import React, { useEffect } from 'react'
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

import { Routes, Route, useNavigate} from 'react-router-dom'
export const AppContext = createContext(null)

function App() {
  const [latestPost, setLatestPost] =useState(AppContext)
  const [shoes, setShoes] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState([])
  const [reviews, setReviews] = useState([])
  const [change, setChange] = useState(false)
  const [search, setSearch] = useState("")
  const [filteredBrand, setFilteredBrand] = useState(false)
  const navigate = useNavigate()
  
  
  

useEffect(() => {
  fetch('/shoes')
  .then(response => {
    if(response.ok && currentUser)   {
      response.json().then(data => setShoes(data))
      } else {
      response.json().then(data => console.log(data.errors)) && navigate('/')
    }
})
}, [currentUser, change])


useEffect(() => {
  fetch('/me')
  .then(res => {
    if(res.ok){
      res.json().then(user => {
        setCurrentUser(user)
      })
    } else {
      res.json().then(data => console.log(data))
    }
  })
}, [])

useEffect (() => {
  fetch('/reviews').then(r=> r.json()).then((data) => setReviews(data))
},[])




 
  

const handleSearch = (string) => {
  setSearch(string)
}

// const filteredShoes = shoes.filter(shoe => shoe.brand.toLowerCase().includes(search.toLocaleLowerCase()))




console.log(currentUser)


 



  return (
    
    <div className="App">
      <AppContext.Provider value={{latestPost, setLatestPost}}>
      <Routes>
        <Route path = "/" element = {<SplashPage/>}/>
        <Route path ='/shoes' element={<ShoeContainer shoes = {shoes} setCurrentUser={setCurrentUser} handleSearch = {handleSearch} user = {currentUser}/> }/>
        <Route path ='/createshoe' element = {<ShoeForm setChange = {setChange} change ={change}/>}/>
        <Route path ='/latestshoe' element ={<LatestShoe/>}/>
        <Route path = '/signup' element = {<SignUp setCurrentUser={setCurrentUser}/>}/>
        <Route path = '/login' element = {<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path = '/reviews' element = {<ReviewContainer reviews = {reviews}  currentUser={currentUser}/>}/>
        <Route path = '/shoes-with-images/:id' element = {<ShoeReviewCard currentUser = {currentUser} shoes = {shoes} />}/>
        <Route path = '/reviewform' element= {<ReviewForm/>}/>
      </Routes>
      </AppContext.Provider>

      
    </div>
  );
}

export default App;
