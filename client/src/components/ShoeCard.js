import React from 'react'



function ShoeCard ({shoe}) {

    console.log(shoe)





    return(
        <div>
            <card>
                <h1>{shoe.name}</h1>
                <h2>{shoe.price}</h2>
                <img src = {shoe.image_url} alt = "shoe"/>
            </card>
        
        </div>
    )

}



export default ShoeCard