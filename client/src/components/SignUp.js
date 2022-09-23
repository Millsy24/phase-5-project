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
            console.error(errors);
          });
        }
      });
 


}



 



    






    return(
        <form onSubmit = {handleSubmit}>
        <label htmlFor="name">UserName:</label>
        <input type= "text" name = "name" value = {name} onChange={(e)=>setName(e.target.value)}></input>
        <label htmlFor="email">Email:</label>
        <input type= "text" name = "email" value = {email} onChange={(e)=>setEmail(e.target.value)}></input>
        <label htmlFor="password">Password:</label>
        <input type= "text" name="password" value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
        <label htmlFor="dob">Date of Birth:</label>
        <input type= "text" name="dob" value = {dob} onChange={(e)=>setDob(e.target.value)}></input>
        <label htmlFor="phone">Phone Number:</label>
        <input type= "text" name="phone" value = {phone} onChange={(e)=>setPhone(e.target.value)}></input>
        <button type="submit">Submit</button>
    </form>

        // <form onSubmit = {handleSubmit}>
        //     <label htmlFor = "Username">Username:</label>
        //     <input  type = "text" name = "name" value = {name} onChange = {(e) =>setName(e.target.value)}/>

        //     <label htmlFor = "Password">Password:</label>
        //     <input  type = "text" name = "password" value = {password} onChange = {(e) =>setPassword(e.target.value)}/>

        //     <label htmlFor = "Email">Email:</label>
        //     <input  type = "text" name = "email" value = {email} onChange = {(e) =>setEmail(e.target.value)}/>

        //     <label htmlFor = "dob">Date of Birth:</label>
        //     <input  type = "text" name = "dob" value = {dob} onChange = {(e) =>setDob(e.target.value)}/>

        //     <label htmlFor = "Phone">Phone:</label>
        //     <input  type = "text" name = "phone" value = {phone} onChange = {(e) =>setPhone(e.target.value)}/>


        //     <button type="submit">Sign Up!</button>





        // </form>


    )


}

export default SignUp