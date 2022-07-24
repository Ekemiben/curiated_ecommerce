import React, { Component } from 'react';
import Product from './Product';
// import {productData} from '../data'
import { ProductConsumer } from '../Context';

export class Productlist extends Component {
  
  render() {
    // console.log(this.state.products)
    return (
      <React.Fragment>

        <ProductConsumer>
          {(value) =>{
             return value.products.map(pro =>{
              return <Product key={pro._id}  product= {pro}/>
            })
          }}
        </ProductConsumer>

      </React.Fragment>
     
    )
  }
}

export default Productlist