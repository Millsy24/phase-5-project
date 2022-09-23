import React from 'react'
import Review from './Review'
import {useState} from 'react'




function ReviewContainer ({reviews, getReviews}) {
    // reviews === [] ? <></> : renderReviews
    const renderReviews = reviews.map(review => {
        return <Review key = {review.id} review = {review}/>
    })

    









    return(

        <>
        {renderReviews}
        </>


    )

}

export default ReviewContainer