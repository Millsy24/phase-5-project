import React from 'react'
import {useNavigate} from 'react-router-dom'



function SplashPage () {
    const navigate = useNavigate()
    function navigateLogin () {
        navigate('/login')
    }

    function navigateSignup () {
        navigate('/signup')
    }



return(
    <div>
    <button onClick = {navigateLogin}>Login</button>
    <br/>
    <button onClick = {navigateSignup}>Signup</button>
    </div>
)

}



export default SplashPage