import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../Context';
// import { ReactPropTypes } from 'prop-types'
import { PropTypes } from 'prop-types';

export class Product extends Component {
  render() {
      const {_id, title, image, price, inCart, status} = this.props.product;
    return (
       
      <div className='category' > 
          <div className='products'>
          <div className=''>
              <ul></ul>
          <ProductConsumer>

              
             
              {(value) => ( <li className='products'>

                   <div className='lireplace' onClick={() => value.handleDetail(_id)}>
                   <Link to ='/details'>
                       <img src={image} alt='Product image'/>
                   </Link>



                   {status > 0 ? (
                                    <span className='instock'>
                                        <div className='product-price'>
                                        <p>{title}</p>
                                        <div>$ {price}.00 </div>
                              
                                    
                                    </div>  
                                    </span>
                                ): (
                                <span className='out-of-stock'> <div className='stock heading'>OUT OF STOCK </div>
                                 <div className='unavalable product-price'>
                                        <p>{title}</p>
                                        <div>$ {price}.00
                              
                                    </div>
                                    </div> 
                                
                                </span>
                                )
                                }







                   <button className='cart btn' disabled={inCart ? true:false}
                   onClick = {()=>{
                       value.addToCart(_id)
                    value.openModal(_id)}}>
                       
                   {inCart ? (<p className='inCart text' disabled>{""} In Cart
                   </p>):(
                       <p>cart icon here</p>
                   )
                   }
                   </button>
               </div>
               </li>
              )}
         
          </ProductConsumer>
          </div>
          {/* Card footer */}
          <div className='card footer'>
             

          </div>
          </div>
          </div>
      
    
    )
  }
}

Product.propTypes ={
    product:PropTypes.shape({
        _id:PropTypes.number,
        image:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

export default Product