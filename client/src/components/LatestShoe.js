import  { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import NavBar from './NavBar'




function LatestShoe ({latestShoe}) {
// const [shoes, setShoes] = useState([])
// useEffect(() => {
//     fetch('/shoes')
//     .then(response => {
//         if (response.ok) {
//             response.json().then(data => console.log(data))
//         }
//         else{
//             response.json().then(data => console.log(data.errors))
//         }
//     })
// },[])




 




    return(
     <>
        <NavBar/>
        <div className = "max-w-2x1 mx-auto">
    <div className = "bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <img className = "rounded-t-lg p-8" src = {latestShoe.image_url}/>
    </div>
    <div>
        <h3>{latestShoe.name}</h3>
    </div>
    <div>
        <span>Price: {latestShoe.price}</span>
    </div>
    <div>
        <span>Brand: {latestShoe.brand}</span>
    </div>
    <div>
        <span>Color: {latestShoe.color}</span>
    </div>
</div>

    </> 

    )
}

export default LatestShoe