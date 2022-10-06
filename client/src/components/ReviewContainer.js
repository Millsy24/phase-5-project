import React, { useEffect } from 'react'
import Review from './Review'
import {useState} from 'react'
import ShoeReviewCard from './ShoeReviewCard'



function ReviewContainer ({ setReviewChange, change, currentUser}) {
    const [reviews, setReviews] = useState([])
   useEffect(() => {
    fetch('/reviews')
    .then(r => r.json())
    .then(data => setReviews(data))
   },[])

console.log(reviews)


    const renderReviews = reviews.map(review => <ShoeReviewCard key = {review.id} review = {review} setReviewChange ={setReviewChange} change ={change} currentUser = {currentUser}/>)
    
    








    return(

        <>
        {renderReviews}
        </>


    )

}

export default ReviewContainer