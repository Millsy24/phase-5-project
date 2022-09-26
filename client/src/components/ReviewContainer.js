import React from 'react'
import Review from './Review'
import {useState} from 'react'
import ShoeReviewCard from './ShoeReviewCard'



function ReviewContainer ({reviews, currentUser}) {
    const [rating, setRating] = useState("")
    const [content, setContent] = useState("")
    const renderReviews = reviews.map(review => <ShoeReviewCard key = {review.id} review = {review}/>)
    
    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            rating, 
            content,
            user_id: currentUser.id,
            
        }




    }








    return(

        <>
        {renderReviews}
        </>


    )

}

export default ReviewContainer