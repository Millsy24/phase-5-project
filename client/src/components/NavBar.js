import React, { useEffect } from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'




function NavBar ({setCurrentUser}) {
    
    const navigate = useNavigate()

   



    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        }).then(() =>{
            setCurrentUser(null)
            navigate('/')
        })
    }



    return(
        <div>
        <p className="Link" >
            <Link to="/signup">Signup</Link>
        </p>
        <p className="Link" >
            <Link to="/shoes">View Shoes</Link>
        </p>
        <p className="Link" >
            <Link to="/latestshoe">NewShoe</Link>
        </p>
        <p className ="Link">
            <Link to="/login">Login</Link>
        </p>
        <p className ="Link">
            <Link to="/createshoe">Sell Your Shoes</Link>
        </p>
        
    <button onClick = {handleLogout}>Logout</button>
</div>



    )
}




export default NavBar