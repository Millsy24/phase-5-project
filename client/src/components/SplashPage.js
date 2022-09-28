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
    <>
    <div className = "max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className = "w-full max-w-md space-y-8">
    <button onClick = {navigateLogin} className ="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Login</button>
    <br/>
    <button onClick = {navigateSignup}  className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Signup</button>
    </div>
    </div>


<div class="container my-24 px-6 mx-auto">
  
  
  <footer class="mb-32 text-gray-800 text-center">
    
    <h2 class="text-3xl font-bold mb-12">The best place to shop for the best shoe <u class=""></u> brands</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
      <div class="mb-12 lg:mb-0">
        <img
          src="https://www.freepnglogos.com/uploads/logo-jordan-coloring-pages-3.jpg"
          class="img-fluid grayscale px-6 md:px-12"
          alt="Nasa - logo"
        />
      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src="https://i.ebayimg.com/thumbs/images/g/h-QAAOSwB99c9PRl/s-l1600.jpg"
          class="img-fluid grayscale px-6 md:px-12"
          alt="Amazon - logo"
        />
      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src="https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg"
          class="img-fluid grayscale px-6 md:px-12"
          alt="Nike - logo"
        />
      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg"
          class="img-fluid grayscale px-6 md:px-12"
          alt="Ikea - logo"
        />
      </div>
    </div>
  </footer>
  
  
</div>
</>
)

}



export default SplashPage