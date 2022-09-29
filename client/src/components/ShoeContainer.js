import React, { useEffect, useState } from 'react'
import ShoeCard from './ShoeCard'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'




function ShoeContainer ({shoes, setCurrentUser, currentUser}) {
    
    



    
    const renderShoes = shoes?.map(shoe => <ShoeCard key = {shoe.id} shoe = {shoe}/>)



    return(
    <>
        
        <NavBar setCurrentUser = {setCurrentUser}/>
        
            <div className = "flex flex-wrap -mb-4">   
            
                {renderShoes}
        
        
            </div>
    </>
    )




}

export default ShoeContainer