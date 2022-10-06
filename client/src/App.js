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
import Contact from './components/Contact';
import { Routes, Route, useNavigate} from 'react-router-dom'
import Pagination from './components/Pagination';
import NavBar from './components/NavBar';
export const AppContext = createContext(null)

function App() {
  const [latestPost, setLatestPost] =useState(AppContext)
  const [shoes, setShoes] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState([])
  const [reviews, setReviews] = useState([])
  const [change, setChange] = useState(false)
  const [search, setSearch] = useState("")
  const [latestShoe, setLatestShoe] = useState([])
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  
  

useEffect(() => {
  fetch('/shoes')
  .then(response => {
    if(response.ok && currentUser)   {
      response.json().then(data => {
        setShoes(data)
        setIsLoggedIn(true)
        setLatestShoe(data[data.length - 1])})
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
        setIsAuthenticated(user)
      })
    } else {
      res.json().then(data => console.log(data))
    }
  })
}, [])

useEffect (() => {
  fetch('/reviews').then(r=> r.json()).then((data) => setReviews(data))
},[])




 
  
const lastPostIndex = currentPage * postsPerPage
const firstPostIndex = lastPostIndex - postsPerPage

const currentShoes = shoes.slice(firstPostIndex, lastPostIndex)








 



  return (
    <>
    <div className="">
      <NavBar currentUser = {currentUser}setCurrentUser= {setCurrentUser} isLoggedIn = {isLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>
      <AppContext.Provider value={{latestPost, setLatestPost}}>
      <Routes>
        <Route path = "/" element = {<SplashPage/>}/>
        <Route path ='/shoes' element={<ShoeContainer shoes = {currentShoes} setCurrentUser={setCurrentUser}  user = {currentUser} postsPerPage = {postsPerPage} setCurrentPage = {setCurrentPage} totalPosts= {shoes.length}/> }/>
        <Route path ='/createshoe' element = {<ShoeForm setChange = {setChange} change ={change}/>}/>
        <Route path ='/latestshoe' element ={<LatestShoe latestShoe = {latestShoe}/>}/>
        <Route path = '/signup' element = {<SignUp setCurrentUser={setCurrentUser}/>}/>
        <Route path = '/login' element = {<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path = '/shoes-with-images/:id' element = {<ShoeReviewCard currentUser = {currentUser} shoes = {shoes} />}/>
        <Route path = '/reviewform' element= {<ReviewForm/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
      
      </AppContext.Provider>

      
    </div>
     
     </>
  );
}

export default App;
