import React from 'react'

// this is copying the property of the Cart List because the item and value is already define there
export default function CartItem({item, value}) {
    const{_id, title, image, price, total, count, size,color} =item;
    const{increamentation, decreamentation, removeItem} = value
  return (
    <div className='cartcontainer'>
        {/* Here is just like any other class components 
        its main aim is to return all the  above listed properties
         in a functional way*/}
         <div className='display area'>
             {/* <h3>Cart</h3> */}
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
  )
}
