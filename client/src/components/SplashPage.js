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
    <h2 class="text-2xl font-bold mb-20 text-center mt-24"><p className = "mb-2 text-red-600 text-2xl">Legacy Sneakers</p> The best place to shop for the <u className = "text-red-600">trendiest</u> shoe brands</h2>
    <div className = "relative  max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300 ">
        <div className = "w-full max-w-md space-y-8">
          <h1 className = "text-2xl font-bold leading-none text-red-600 text-center">Legacy Sneakers</h1>
    <button onClick = {navigateLogin} className ="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Login</button>
    <p className = "text-center">or</p>
    <button onClick = {navigateSignup}  className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Signup</button>
    
    </div>
    </div>


<div class="absolute bottom-0 px-6 mx-auto mb-5">
  
  
  <section class=" text-gray-800 text-center">
    
  

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
      <div class="mb-0 lg:mb-0">
        <img
          src="https://www.transparentpng.com/thumb/nike-logo/BC26mv-nike-logo-free-cut-out.png"
          className="px-6 md:px-20 bg-opacity-100"
          alt="Nike Logo"
        />
      </div>

      <div class="mb-0 lg:mb-0">
        <img
          src="https://www.transparentpng.com/thumb/adidas-logo/hd-adidas-logo-clipart-3.png"
          class="img-fluid grayscale px-6 md:px-20"
          alt="Adidas Logo"
        />
      </div>

      <div class="mb-0 lg:mb-0">
        <img
          src="https://www.transparentpng.com/thumb/michael-jordan/clipart-michael-jordan-photos-png-16.png"
          class="img-fluid grayscale px-6 md:px-20"
          alt="Jordan Logo"
        />
      </div>

      <div class="mb-0 lg:mb-0">
        <img
          src="https://www.transparentpng.com/thumb/puma-logo/1PCkOv-puma-logo-free-cut-out.png"
          class="img-fluid grayscale px-6 md:px-20"
          alt="Puma Logo"
        />
      </div>
    </div>
  </section>
  
  
</div>
</>
)

}



export default SplashPage