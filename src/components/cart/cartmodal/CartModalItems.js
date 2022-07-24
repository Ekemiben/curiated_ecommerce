import React, { Component } from 'react'
import { ProductConsumer } from '../../../Context';

export class CartModalItems extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  first
      }
    }
  render() {

    const{_id, title, image, price, total, count, size,color} =this.item;
    const{increamentation, decreamentation, removeItem} = this.value
    return (
        <ProductConsumer >
        <div className='cartcontainer'>
         <div className='display area'>
             <div className='cartfirst column'>
                 <div className='cartproducttitle'>{title}</div>
                 <div className='cartPrice'>
                     <p>Price:</p>
                     {price}</div>
                 <div className='cartsize'>{size}</div>
                 <div className='cartcolor'>{color}</div>
             </div>

             <div className='cartright column'>
             <div className='cartimg con'>
                    <div className='cartimg btn' > <button className='increament' onClick={() => increamentation(_id)}> + </button></div>
                    <div className='cartimg btn'><button className='count' onClick={()=> console.log( count + 1)}>{count }</button></div>
                    <div className='cartimg btn' ><button className='decreament' onClick={()=> decreamentation(_id)}> - </button></div>
                </div>
                <div className='image display'>
                    <img src={image} alt={title} />
                </div>
               
            </div>
             {/* <div className='price'>Price:{price}</div> */}
             

             
             {/* <div className='price'>Total price: $ {total}</div> */}
         </div>
         <div className='removeItem'>
                 <button className='remove item' onClick={()=> removeItem(_id)}>Remove Item  </button>
         </div>
        
        
        
    </div>
    </ProductConsumer>
    )
  }
}

export default CartModalItems