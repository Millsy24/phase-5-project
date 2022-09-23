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
              res.json().then((errors) => {
                console.error(errors);
              });
            }
          });
          
  
        };
  
        
      
        return (
          <form  onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              // class="border-black border-2"
              id="email-input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br></br>
            <p></p>
            <label htmlFor="password">Password:</label>
            <input
              // class="border-black border-2"
              id="password-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br></br>
            <p></p>
            <button 
            // class="border-black border-2" 
            type="submit">Submit</button>
          </form>
        );
      };



export default Login