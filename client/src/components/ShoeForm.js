import React from "react";

import {AppContext} from "../App"
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'



function ShoeForm () {
    const {latestPost, setLatestPost} = useContext(AppContext)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const data = new FormData()
        data.append("shoe[name]", e.target.name.value)
        data.append("shoe[image]", e.target.image.files[0])
        submittoAPI(data)

    }


    function submittoAPI (data) {
        fetch('/shoes', {
            method: "POST",
            body: data
        })
        .then(r => r.json())
        .then(data => setLatestPost(data))
        .catch((error) => console.log(error))
        navigate('/shoes')
    }

    return(
        <div>
        <h1>Create a shoe!</h1>
        <form onSubmit = {(e) => handleSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input type = "text" name = "name" id = "title"/>
            <label htmlFor="image">Name</label>
            <input type = "file" name ="image" id ="image"/>
            

            <button type ="submit">Create Shoe</button>
        </form>
        </div>
    )
}

export default ShoeForm