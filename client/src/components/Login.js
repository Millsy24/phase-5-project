import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login({setCurrentUser}) {

    const navigate = useNavigate()
      const [formData, setFormData] = useState({
          email: "",
          password: "",
        });
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
        const handleSubmit = (event) => {
          event.preventDefault();
          fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then((res) => {
            if (res.ok) {
              res.json().then((user) => {
                setCurrentUser(user);
                navigate('/shoes')
              });
              
            } else {
              alert("Invalid Credintials")
            }
          });
          
  
        };
  
        
      
        return (
          // max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300
          <>
          <h2 class="text-2xl font-bold mb-20 text-center mt-24"><p className = "mb-2 text-red-600 text-2xl">Legacy Sneakers</p> The best place to shop for the <u className = "text-red-600">trendiest</u> shoe brands</h2>
          <div className ="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 mt-20 "> 
          <form  onSubmit={handleSubmit}>
            <label htmlFor="email" className ="font-semibold text-sm text-gray-600 pb-1 block">Email:</label>
            <input
              className ="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              id="email-input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br></br>
            <p></p>
            <label htmlFor="password" className ="font-semibold text-sm text-gray-600 pb-1 block">Password:</label>
            <input
              className = "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              id="password-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br></br>
            <p></p>
            <button 
            className = "w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
            type="submit">Submit</button>
          </form>
          
          </div>

<div class="absolute bottom-0 my-0 px-6 mx-auto mb-5">
  
  
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
          
        );
      };



export default Login