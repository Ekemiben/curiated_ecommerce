import React, { Component } from 'react';
import CartColumn from './CartColumn'
import Empty from './Empty';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';
import CartModalItems from './cartmodal/CartModalItems';
import CartModalList from './cartmodal/CartModalList';





export class Cart extends Component {
  render() {
    return (
      
      <section className='cartmainsection'>
        <ProductConsumer>
          {value =>{
            const {cart} = value;
            if(cart.length >0){
              return (
                <React.Fragment>
                <div className='pagetitle'>Title</div>
                 {/* <CartColumn /> */}
                 <CartList value ={value} />
                 <CartTotal value={value} />
                 {/* Modals */}
                 {/* <CartModalItems value ={value} />
                 <CartModalList value={value} /> */}
                </React.Fragment>
              )
            }else {
              return  <Empty />
            }
           
          }}
        </ProductConsumer>
        
      
       
      </section>
    )
  }
}

export default Cart