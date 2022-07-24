import React, { Component } from 'react'
import { ProductConsumer } from '../../../Context'
import CartModalItems from './CartModalItems'

export class CartModalList extends Component {
  render() {
    const {cart} = this.value
    return (
      <ProductConsumer>
      <p>Hello from cart list</p>
      {this.cart.map(item => {
          // This is where the Cart Item are getting ther information from it is set to the item and value
          return <CartModalItems key ={item._id} item = {item}
          value = {this.value} />
      })}

</ProductConsumer>
    )
  }
}

export default CartModalList