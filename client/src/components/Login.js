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
          
          <div className ="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
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
          
        );
      };



export default Login