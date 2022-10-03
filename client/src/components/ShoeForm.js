import React from "react";

import {AppContext} from "../App"
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import NavBar from "./NavBar";



function ShoeForm ({setChange, change}) {
    const {latestPost, setLatestPost} = useContext(AppContext)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const data = new FormData()
        data.append("shoe[name]", e.target.name.value)
        data.append("shoe[image]", e.target.image.files[0])
        data.append("shoe[price]", e.target.price.value)
        data.append("shoe[brand]", e.target.brand.value)
        data.append("shoe[size]", e.target.size.value)
        data.append("shoe[color]", e.target.color.value)
        submittoAPI(data)

    }


    function submittoAPI (data) {
        fetch('/shoes', {
            method: "POST",
            body: data
        })
        .then(r => r.json())
        .then(data => setChange(!change))
        .catch((error) => console.log(error))
        navigate('/shoes')
    }

    return(
        <>
        <NavBar/>
        <div className ="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1>Sell your shoes on the best marketplace around!</h1>
        <form onSubmit = {(e) => handleSubmit(e)}>
            <label htmlFor="name" className ="font-semibold text-sm text-gray-600 pb-1 block">Name:</label>
            <input type = "text" name = "name" id = "title" className ="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>

            <label htmlFor="bramd" className ="font-semibold text-sm text-gray-600 pb-1 block">Brand:</label>
            <input type = "text" name ="brand" id ="brand" className ="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>

            <label htmlFor="price" className ="font-semibold text-sm text-gray-600 pb-1 block">Price:</label>
            <input type = "text" name ="price" id ="price" className ="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>

            <label htmlFor="size" className ="font-semibold text-sm text-gray-600 pb-1 block">Size:</label>
            <input type = "text" name ="size" id ="size" className ="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>

            <label htmlFor="color" className ="font-semibold text-sm text-gray-600 pb-1 block">Color:</label>
            <input type = "text" name ="color" id ="color" className ="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>

            <label htmlFor="image" className ="font-semibold text-sm text-gray-600 pb-1 block">Image:</label>
            <input type = "file" name ="image" id ="image" className = "block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"/>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

            

            <button type ="submit" className = "w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Create Shoe</button>
        </form>
        </div>
        </>
    )
}

export default ShoeForm