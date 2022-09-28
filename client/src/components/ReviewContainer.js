import React from 'react'
import Review from './Review'
import {useState} from 'react'
import ShoeReviewCard from './ShoeReviewCard'



function ReviewContainer ({reviews, setReviewChange, change}) {
    
    const renderReviews = reviews.map(review => <ShoeReviewCard key = {review.id} review = {review} setReviewChange ={setReviewChange} change ={change}/>)
    
    








    return(

        <>
        {renderReviews}
        </>


    )

}

export default ReviewContainer