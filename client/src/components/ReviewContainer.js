import React from 'react'
import Review from './Review'
import {useState} from 'react'
import ShoeReviewCard from './ShoeReviewCard'



function ReviewContainer ({reviews}) {
    
    const renderReviews = reviews.map(review => <ShoeReviewCard key = {review.id} review = {review}/>)
    
    








    return(

        <>
        {renderReviews}
        </>


    )

}

export default ReviewContainer