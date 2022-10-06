import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Review from './Review'






function ShoeReviewCard ({currentUser, reviews,}) {
    
    const params = useParams()

    const [shoe, setShoe] = useState({}) 
    const [rating, setRating] =  useState('')
    const [change, setChange] = useState(false)
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
	},[change])

    


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
        .then(review => setChange(!change))
        
        
        e.target.reset()



    }

    
    
    
    
    
 const renderReviews = shoe.reviews?.map(review => <Review key = {review.id} review = {review}  setChange ={setChange} change = {change} currentUser = {currentUser}/>)


   
    

    return(
        <>
            <div class="grid place-items-center">


<div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 mb-5">
    <a href="#">
        <img class="rounded-t-lg p-8" src={shoe.image_url} alt="product image"/>
    </a>
        <div class="px-5 pb-5">
            
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{shoe.name}</h3>
            <p >Brand: {shoe.brand}</p>
            <p >Color: {shoe.color}</p>
            

            <p className = "text-2xl font-bold text-gray-900 dark:text-white">
                ${shoe.price}
            </p>
            
            
        </div>
</div>
</div>
            <hr className = "border-1 border-gray-900 mt-5"></hr>
            

            <div className ="mt-3">
                <form onSubmit ={handleSubmit}>
                    <label className = "font-semibold text-sm text-gray-600 pb-1 block ml-2">Your Rating:</label>
                    <input className = "w-34 text-center ml-3"min = "1" max = "5" type ="number"onChange = {handleRatingChange}></input><a>/5⭐'s</a>
                    <label className = "font-semibold text-sm text-gray-600 pb-1 block mt-2 ml-2">Write a Review:</label>
                    <textarea id="message" rows="4" class="ml-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." onChange={handleContentChange}></textarea>
                    <button type = "submit" className = "h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-800 ">Submit Review</button>
                </form>
            </div>

            {renderReviews}
                
                  
            
        </>



    )
}

export default ShoeReviewCard