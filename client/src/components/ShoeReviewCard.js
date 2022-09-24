import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'




function ShoeReviewCard () {

    const params = useParams()

    const [shoe, setShoe] = useState([])

    useEffect(() => {
        fetch(`/shoes/${params.id}`)
        .then(response => {
            if(response.ok) {
                response.json().then(data => setShoe(data))
                } else {
                response.json().then(data => console.log("failed"))
            }
    })
},[])
    
    console.log(shoe)


    return(

        <div>Hello</div>




    )
}

export default ShoeReviewCard