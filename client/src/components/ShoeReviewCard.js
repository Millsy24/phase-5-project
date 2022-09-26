import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Review from './Review'






function ShoeReviewCard ({currentUser, reviews}) {
    
    const params = useParams()

    const [shoe, setShoe] = useState({}) 
    const [rating, setRating] =  useState('')
    
    const [content, setContent] = useState('')
    

    useEffect(()=> {
		fetch(`/shoes-with-images/${params.id}`)
			.then(response => {
				if(response.ok) {
					response.json().then(data => setShoe(data))
					} else {
					response.json().then(data => console.log(data.errors))
				}
		})
	},[])

    function fetchShoe() {
        fetch(`/shoes-with-images/${params.id}`)
			.then(response => {
				if(response.ok) {
					response.json().then(data => setShoe(data))
					} else {
					response.json().then(data => console.log(data.errors))
				}
		})
    }


    function handleRatingChange (e) {
        setRating(e.target.value)
    }

    function handleContentChange (e) {
        setContent(e.target.value)
    }


    
    function handleSubmit (e) {
        e.preventDefault()

        const data = {
            "rating": rating,
            "content": content,
            "shoe_id": shoe.id,
            "user_id": currentUser.id
        }

        fetch(`/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(review => fetchShoe(review))
        
        
        e.target.reset()



    }

    
    
    
    
    
 const renderReviews = shoe.reviews?.map(review => <Review key = {review.id} review = {review} fetchShoe = {fetchShoe}/>)


   
    

    return(
        <>
            <div>
                <img src = {shoe.image_url} />
                <h1>{shoe.name}</h1>
                <h3>{shoe.price}</h3>
                <h3>{shoe.brand}</h3>
                <h4>{shoe.color}</h4>
            </div>

            <div>
                <form onSubmit ={handleSubmit}>
                    <input min = "1" max = "5" type ="number" placeholder = "rating" onChange = {handleRatingChange}></input>
                    <input type = "text" placeholder= "Tell us what you think!" onChange = {handleContentChange}></input>
                    <button type = "submit">Submit Review</button>
                </form>
            </div>

            {renderReviews}
                
                  
            
        </>



    )
}

export default ShoeReviewCard