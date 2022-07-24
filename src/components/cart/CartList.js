import React from 'react'
import CartItem from './CartItem'

export default function CartList({value}) {
    const {cart} = value
    // console.log(value, cart)
  return (
    <div>
        <p>Hello from cart list</p>
        {cart.map(item => {
            // This is where the Cart Item are getting ther information from it is set to the item and value
            return <CartItem key ={item._id} item = {item}
            value = {value} />
        })}

    </div>
  )
}
