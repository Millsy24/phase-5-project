import React from 'react'
import {useState} from 'react'




    function Review ({review, setChange, change}) {

        const [rating, setRating] = useState('')
        const [content, setContent] = useState('')
        const [editForm, setEditForm] = useState(false)

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










        const editFormInput = 
        <form onSubmit ={handleEditForm}>
            <input placeholder = "Edit Rating" type="number" min = "1" max = "5" onChange ={handleChangeRating}></input>
            <input placeholder ="Edit Content" type = "text" onChange = {handleChangeContent}></input>
            <button type = "submit">Submit Review</button>
        </form>






        return(
            <div>
                <p>{review.id}</p>
                <p>Rating: {review.rating}</p>
                <p>Review: {review.content}</p>
                {editForm ? <button  onClick = {toggleEditForm} >Cancel Edit Review</button> : <button onClick = {toggleEditForm}>Edit Review</button>}
                {editForm ? editFormInput: null}
                <button onClick ={handleDelete}>Delete Review</button>
            </div>
        )

    }


    export default Review