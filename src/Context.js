import React, { Component } from 'react'
import { productData, productDetails } from './data';


const ProductContext = React.createContext()
// Provider
//  Consumer

class ProductProvider extends Component {




    state ={
        products:[],
        detailProduct:productDetails,
        cart:[],
        modalOpen:false,
        modalProduct:productData,
        cartsubTotal:0,
        cartTax:0,
        cartTotal:0,
        // qty:0,

    }
    componentDidMount(){
        this.setProductMethod()
    }
    setProductMethod = () =>{
        let tempProducts =[];
        productData.forEach(item =>{
            const singleItem ={...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(()=>{
            return{products: tempProducts}
        })
    }
    getItme = (_id) =>{
        const product = this.state.products.find(item => item._id === _id);
        return product;
    }
    handleDetails = (_id)=>{
        const product = this.getItme(_id);
        this.setState(() => {
            return {detailProduct:product}
        })
        console.log('hello from details')
    }
    addToCart = (_id) => {
        // console.log(`hello from add to cart.id ${id}`)
        let cartProduct = [...this.state.products];
        const index = cartProduct.indexOf(this.getItme(_id));
        const product = cartProduct[index]
        product.inCart =true;
        product.count =1;
        const price =product.price;
        product.total =price;
        this.setState(()=>{
            return {products: cartProduct, cart:[...this.state.cart,
            product]};
        }, ()=>{this.addTotal()})
    }
    
    openModal = _id =>{
        const product = this.getItme(_id)
        this.setState(() => {
            return{
                modalProduct:product, 
                modalOpen:true
            }
        })
    }
    closeModal = ()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    increamentation = (_id) =>{

        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item =>item._id === _id)
        const index = tempCart.indexOf(selectedProduct)
        let product = tempCart[index]
        product.count = product.count +1;
        product.total = product.count * product.price;
        
        this.setState(()=> {
            return{ cart:[...tempCart]};
        
        }, () =>{
            this.addTotal()
        })

       

    }
    decreamentation = (_id) => {
        let deCart =[...this.state.cart]
        let selectedDeProduct =deCart.find(item => item._id === _id)
        let deindex = deCart.indexOf(selectedDeProduct)
        let deProduct =deCart[deindex]
        deProduct.count =deProduct.count -1;

        deProduct.count === 0 ? this.removeItem(_id) : 
        deProduct.total = deProduct.count * deProduct.price
        this.setState(
            ()=> {
                return {cart:[...deCart]}
            },
            ()=>{
                this.addToCart()
            }
        )
        

        console.log('this is decreament method', _id)
    }
    removeItem = (_id) =>{
       let removeProduct = [...this.state.products];
       let removeCart = [...this.state.cart];

       removeCart = removeCart.filter(item => item._id !==_id);

       let index = removeProduct.indexOf(this.getItme(_id));

       let newProduct = removeProduct[index]
       newProduct.inCart=false;
       newProduct.count = 0;
       newProduct.total = 0;

       this.setState(() =>{
           return {
               cart:[...removeCart],
               products:[...removeProduct]
           }
       }, () =>{
           this.addTotal()
       })
    }
    clearCart = () =>{
       
        this.setState(()=> {
          return {cart:[]} 
        }, ()=>{
            this.setProductMethod();
            this.addTotal()
        })
        console.log("Clear Cart")
    }
    addTotal = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const newcartTax = subTotal * 0.3;
        const tax = parseFloat(newcartTax.toFixed(2));
        const total = subTotal + tax
        this.setState( ()=> {
            return {
                cartsubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }  
        })
    }
    
    xlSize =(_id) =>{
        console.log("you clicked")
    }


  render() {
    return (
   <ProductContext.Provider value={{
       ...this.state,
       handleDetail:this.handleDetails,
       addToCart:this.addToCart,
       openModal:this.openModal,
       closeModal:this.closeModal,
       increament:this.increamentation,
       decreament:this.decreamentation,
       removeItem:this.removeItem,
       clearCart:this.clearCart

   }}>
       {this.props.children}

   </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;

 export { ProductProvider, ProductConsumer}

//  export default graphql(productData1)(ProductProvider)