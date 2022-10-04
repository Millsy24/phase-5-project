import React from 'react'
import {useNavigate} from 'react-router-dom'



function ShoeCard ({shoe}) {
    

    const navigate = useNavigate()

    function handleReviews () {
        navigate(`/shoes-with-images/${shoe.id}`)
    }

    
    
   const arrAvg = arr => arr.reduce((a,b) => a +b, 0 ) / arr.length
    const getAvgRating = 
    shoe.reviews.length > 0 ? arrAvg(shoe.reviews.map(review => review.rating)) : 0
    const avgRating = parseFloat(getAvgRating).toFixed(1)

    




    return(
        <div class="max-w-2xl mx-auto">


	<div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<a href="#">
			<img class="rounded-t-lg p-8" src={shoe.image_url} alt="product image"/>
        </a>
			<div class="px-5 pb-5">
				<a href="#">
					<h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{shoe.name}</h3>
				</a>
                <a>
                    Rating: {avgRating}/5.0
                </a>
				
				<div class="flex items-center justify-between">
                    
					<span class="text-3xl font-bold text-gray-900 dark:text-white">${shoe.price}</span>
					<a onClick={handleReviews}
						class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Reviews
						</a>
				</div>
			</div>
	</div>
    </div>
        




        
    )

}



export default ShoeCard