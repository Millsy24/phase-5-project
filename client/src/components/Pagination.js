import React from 'react'

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage}) => {
    
    

    
    
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }

  return (
    <div>
        {
            pages.map((page, index) => {
                return <ul className = "flex list-style-none inline-flex mt-5 mb-5">
                                <li clasName = "">
                                <button className = " h-8 w-8 text-xl border border-gray-900 rounded-full ml-2 mr-2 hover:text-red-600 hover:border-red-600"key ={index} onClick = {() => setCurrentPage(page)}>{page}</button>
                                </li>

                            </ul>
                            
                        
            })
        }
    </div>
  )
}

export default Pagination