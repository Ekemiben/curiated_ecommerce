import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import {Link} from "react-router-dom";

export class Details extends Component {
  render() {
    return (
        <ProductConsumer>
             
             {value =>{
                const {_id, title, image, description, price, info, inCart, xlarge, 
                    small, medium, large, gray, black, green,  xlSize} = value.detailProduct
            
             return(
                 <div>
                     <div className='main container'>
                           
                            <div className='left column'>
                                <div className='imagerow'>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='imagerow'>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='imagerow'>
                                    <img src={image} alt={title} />
                                </div>
                            </div>
                            {/* Product info */}
                            <div className='middle column'>
                                <div className='imagerow'>
                                    <img src={image} alt={title} />
                                </div>
                            </div>
                            {/* Right column */}
                            <div className='right column'>
                                <div className='title'>
                                    <h3>{title}</h3>
                                    <h3>Size:</h3>
                                    <div className='all sizes'>
                                       <button className='size' onClick={()=>value.xlSize(_id)}>{xlarge}</button> 
                                       <button className='size'>{small}</button> 
                                       <button className='size'>{medium}</button> 
                                       <button className='size'>{large}</button> 
                                         
                                    </div>
                                    <h3>Color:</h3>
                                    <div className=' all colors' >
                                        <button className='gray color'>{gray}</button>
                                        <button className='black color'>{black}</button>
                                        <button className='green color'>{green}</button>
                                    </div>
                                    <h3>Price:</h3>
                                    <div className='price'>
                                        $ {price}
                                    </div>
                                    <div className='cart btn container'>
                                        <button 
                                        disabled= {inCart ? true : false}
                                        onClick={()=>{
                                            value.addToCart(_id);
                                            value.openModal(_id)
                                        }} className='addtocart btn' >ADD TO CART</button>
                                    </div>
                                    {/* <div className='description'>{description}</div> */}
                                </div>

                            </div>

                     </div>
                 </div>
             )
            }}
        </ProductConsumer>
      
         
     
    )
  }
}

export default Details