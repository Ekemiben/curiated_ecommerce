import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';

export class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value) =>{
              const {modalOpen, closeModal} =value;
              const{image, title, price} = value.modalProduct;
              if(!modalOpen){
                  return null;
              } else{
                  return (
                  <div className="ModalContainer">
                      <div className='modal container'>
                         <div>{title}</div> 
                          <div>{
                              <img src = {image} alt ={title} />
                              }
                            </div>
                          <div>{price}</div>
                          <Link to="/">
                          <button className='closemodal' onClick={()=>closeModal()}>
                              Close Modal
                          </button>
                          </Link>
                          <Link to="/cart">
                          <button className='closemodal' onClick={()=>closeModal()}>
                              Go To Cart
                          </button>
                          </Link>
                          <button className='checkout btn'>Check Out</button>

                      </div>

                  </div>
                  )
              } 
          }}
      </ProductConsumer>
    )
  }
}

export default Modal