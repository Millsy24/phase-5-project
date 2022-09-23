import React from 'react'





    function Review ({review}) {




        return(
            <div>
            <p>{review.rating}</p>
            <p>{review.content}</p>

            </div>
        )

    }


    export default Review