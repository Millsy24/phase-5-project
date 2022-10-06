import  { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import NavBar from './NavBar'




function LatestShoe ({latestShoe}) {


    


 




    return(
     <>
        
        <h1 className = "text-gray-900 text-2xl text-center mb-10">Latest Shoe For Sale</h1>
        <div class="grid place-items-center">


<div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg p-8" src={latestShoe.image_url} alt="product image"/>
    </a>
        <div class="px-5 pb-5">
            
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{latestShoe.name}</h3>
            <p >Brand: {latestShoe.brand}</p>
            <p >Color: {latestShoe.color}</p>
            

            <p className = "text-2xl font-bold text-gray-900 dark:text-white">
                ${latestShoe.price}
            </p>
            
            
        </div>
</div>
</div>
    </> 

    )
}

export default LatestShoe