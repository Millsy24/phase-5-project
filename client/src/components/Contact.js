import React from 'react'
import {FaGithub, FaLinkedin, FaGoogle} from "react-icons/fa"


function Contact () {







    return(
        <>
        <h1 className = "text-center mb-10 text-2xl">Developed By:</h1>
        <div class="grid place-items-center">


<div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
    
        <img class="rounded-l p-5" src="https://i.imgur.com/rjCih6v.jpg" alt="me"/>
    
        <div class="px-3 pb-3">
            
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"></h3>
            <p className ="text-xl text-center mb-3">Lukas Mills</p>
            
            {/* <h1 className = "text-center mb-2 mt-2">Contact Me:</h1> */}
            <h1 className = "ml-4">Email: lukascodes64@gmail.com</h1>
            <div className = "inline-flex place-items-center "> 
            <a className = " ml-24 mr-24 mt-5 mb-5"href="https://github.com/Millsy24" target="_blank"><FaGithub size ={30}/></a>
            <a href="https://www.linkedin.com/in/lukas-mills/" target="_blank"><FaLinkedin size ={30}/></a>
            
            </div>
            
            
        </div>
</div>
</div>
        </>
    )
}

export default Contact