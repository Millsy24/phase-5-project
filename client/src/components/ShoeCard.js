import React from 'react'
import {useNavigate} from 'react-router-dom'



function ShoeCard ({shoe}) {
    

    const navigate = useNavigate()

    function handleReviews () {
        navigate(`/shoes/${shoe.id}`)
    }




    return(
        <div>
            <card>
                <h1>{shoe.name}</h1>
                <h2>{shoe.price}</h2>
                <img src = {shoe.image_url} alt = "shoe"/>
                <button onClick = {handleReviews}>Reviews</button>
            </card>
        
        </div>
    )

}



export default ShoeCard