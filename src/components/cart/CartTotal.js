import React from 'react'
import {Link} from 'react-router-dom'

export default function CartTotal({value}) {
    const{cartTotal, cartTax, cartSubTotal, clearCart} = value
  return (
    <React.Fragment>
        <div className='totalcontainer'>
            <div>

            </div>
            <Link to='/'>
                <button className='clear btn' onClick={()=> clearCart()} >Clear cart</button>
            </Link>
            <div className='subtotal'>
                {cartSubTotal}
            </div>
            <div className='cart tax'><h3>Tax: ${cartTax}</h3>
                
            </div>
            <div className='total'><h3>Total: ${cartTotal}</h3> 
                <div></div>
            </div>
            <button className="order">ORDER</button>
        </div>
    </React.Fragment>
  )
}
