import React, { useEffect, useState } from 'react'
import ShoeCard from './ShoeCard'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import Pagination from './Pagination'



function ShoeContainer ({shoes, setCurrentUser, postsPerPage, setCurrentPage, totalPosts, addToCart}) {
    const [search, setSearch] = useState('')
    
    const filteredShoes = shoes?.filter(sneaker => {
        if (search === '') {
            return sneaker
        }
        else if (sneaker.name.toLowerCase().includes(search.toLowerCase())){
            return sneaker
        }
    })

    const renderShoes = filteredShoes?.map(shoe => <ShoeCard key = {shoe.id} shoe = {shoe} addToCart ={addToCart}/>)

    
    

    return(
    <>
        
        
        <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
                <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <input onChange = {(e) => setSearch(e.target.value)}type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" placeholder="Search" aria-label="Search" />
                </div>
            </div>
        </div>

            
            <div className = "grid grid-cols-4 gap-4">   
            
                {renderShoes}
            </div>
            <div className = "flex justify-center">
                <Pagination totalPosts = {totalPosts} postsPerPage = {postsPerPage} setCurrentPage = {setCurrentPage}/>
            </div>
    </>
    )




}

export default ShoeContainer