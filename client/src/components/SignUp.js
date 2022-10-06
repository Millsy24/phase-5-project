import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'




function SignUp ({setCurrentUser}) {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [dob, setDob] = useState('')
const [phone, setPhone] = useState('')

const navigate = useNavigate()


function handleSubmit (e) {
    e.preventDefault()

    const userData = {
        name, 
        email,
        password,
        dob,
        phone
    }

    fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user);
            navigate('/shoes')

          });
        } else {
          res.json().then((errors) => {
            alert(errors[0])
          });
        }
      });
 


}



 



    






    return(
      <>
      <div className ="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <form onSubmit = {handleSubmit}>
        <label htmlFor="name" className ="font-semibold text-sm text-gray-600 pb-1 block">Username:</label>
        <input type= "text" name = "name" value = {name} onChange={(e)=>setName(e.target.value)} className = "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"></input>
        <label htmlFor="email" className ="font-semibold text-sm text-gray-600 pb-1 block">Email:</label>
        <input type= "text" name = "email" value = {email} onChange={(e)=>setEmail(e.target.value)} className = "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"></input>
        <label htmlFor="password" className ="font-semibold text-sm text-gray-600 pb-1 block">Password:</label>
        <input type= "password" name="password" value = {password} onChange={(e)=>setPassword(e.target.value)} className = "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"></input>
        <label htmlFor="dob" className ="font-semibold text-sm text-gray-600 pb-1 block">Date of Birth:</label>
        <input type= "text" name="dob" value = {dob} onChange={(e)=>setDob(e.target.value)} className = "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"></input>
        <label htmlFor="phone" className ="font-semibold text-sm text-gray-600 pb-1 block">Phone Number:</label>
        <input type= "text" name="phone" value = {phone} onChange={(e)=>setPhone(e.target.value)} className = "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"></input>
        <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Submit</button>
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


    )


}

export default SignUp