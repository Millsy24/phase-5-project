import  { useContext, useEffect } from 'react'
import { AppContext } from '../App'




function LatestShoe () {
const {latestPost, setLatestPost} = useContext(AppContext)

useEffect(() => {
fetch('/latest').then(r => r.json()).then(data => setLatestPost(data.image_url) )
.catch((error) => console.log(error))
}, [latestPost])

    return(
        <div>
            <img src = {LatestShoe} alt ="latest" />

        </div>



    )
}

export default LatestShoe