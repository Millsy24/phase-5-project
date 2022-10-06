import React, { useEffect } from 'react'
import {useState} from 'react'




    function Review ({ review, setChange, change}) {

        const [rating, setRating] = useState('')
        const [content, setContent] = useState('')
        const [editForm, setEditForm] = useState(false)
        const [currentUser, setCurrentUser] = useState([])
        const [users, setUsers] = useState([])
        

        useEffect(() => {
            fetch('/me')
            .then(res => res.json())
            .then(data => setCurrentUser(data))
        },[])

        useEffect(() => {
            fetch('/users')
            .then(r => r.json())
            .then(data => setUsers(data))
        },[])
        

        const toggleEditForm = () => {
            setEditForm(editForm => !editForm)
        }

        const handleChangeRating = (e) => {
            setRating(e.target.value)
        }
    
        const handleChangeContent = (e) => {
            setContent(e.target.value)
        }
        

        const handleEditForm = (e) =>  {
            e.preventDefault()
    
           const reviewData = {
                rating,
                content,
            }
    
            fetch(`/reviews/${review.id}`,{
                method: 'PATCH', 
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify(reviewData)
            })
            .then((resp) => resp.json())
            .then(newReview => setChange(!change))
            e.target.reset()
        }
    
        const handleDelete = (e) => {
            e.preventDefault()
            
            fetch(`/reviews/${review.id}`,{
                method: 'DELETE'
                
            })
            .then(() => setChange(!change))
            
        }



       const renderUserName = users.map(user => {
         return user.id === review.user_id ? <div className = "inline-flex mb-1 ml-2"><label className = "font-semibold text-m text-gray-600 pb-1">Username:</label><p key = {user.id} className = "mb-2 ml-2">{user.name}</p></div> : null
       })






        const editFormInput = 
        <form onSubmit ={handleEditForm}>
            <input placeholder = "Edit Rating" type="number" min = "1" max = "5" onChange ={handleChangeRating}></input>
            <input placeholder ="Edit Content" type = "text" onChange = {handleChangeContent}></input>
            <button type = "submit" className = "h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-800">Submit Review</button>
        </form>


        
        
        


        return(
            <>
            <hr className = "border-1 border-gray-900 mb-2"></hr>
            
            <div className = "bg-white rounded-lg m-4">

                
            <>{renderUserName}</>
            <br></br>
                
                <div className ="inline-flex"> <label className = "font-semibold text-m text-gray-600 pb-1 ml-2">Rating:</label> <p className="ml-3">{review.rating}/5⭐'s</p> </div>
                <div className = "mt-3"> <label className = "font-semibold text-m text-gray-600 pb-1 m-2">Review:</label> <p className = "mb-4 mt-4 ml-4">{review.content}</p> </div>
                {currentUser.id === review.user_id ? <button className = "h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-800"onClick={toggleEditForm}>Edit Your Review</button> : null}
                {currentUser.id === review.user_id ? <button onClick ={handleDelete}  className = "h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-800">Delete Your Review</button>: null}
                {editForm ? editFormInput: null}  
                
                
            </div>
            </>
        )

    }


    export default Review