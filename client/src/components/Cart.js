import React from 'react'
import {useEffect} from 'react'



function Cart ({renderCart, clearCart, cart, getTotal}) {
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      },[cart])
   



    return (
        <>
        
        
        <h1>{renderCart}</h1>
    
        
        <div className ="inline-flex  ">
        {cart.length > 0 ? <label className = "font-semibold text-gray-600 pb-1 mr-4 ml-4">Total:</label> : null}
        {cart.length > 0 ? <h1 className ="">${getTotal()}</h1> : null}
        
        </div>
        <br></br>
        {cart.length > 0 ? <button className ="ml-3 h-8 px-4  text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-800 absolute">Checkout</button> : null }
        <br></br>
        {cart.length > 0 ? <button className = "m-3 h-8 px-4  text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-800 absolute"onClick = {clearCart}>Clear Cart</button> : null}
        
        </>
    )
}

export default Cart