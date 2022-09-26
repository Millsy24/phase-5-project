import React from 'react'
import ShoeCard from './ShoeCard'
import NavBar from './NavBar'



function ShoeContainer ({shoes, setCurrentUser}) {
    
    
const renderShoes = shoes?.map(shoe => <ShoeCard key = {shoe.id} shoe = {shoe}/>)


    return(
        <h1>
            <NavBar setCurrentUser = {setCurrentUser}/>
            {renderShoes}
        </h1>
    )




}

export default ShoeContainer