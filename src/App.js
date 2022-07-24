import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Cart from './components/cart/Cart';
import Details from './components/Details';
import Default from './components/Dfault';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import PagesTitle from './components/PagesTitle';
import Productlist from './components/Productlist';

// Apollo section


class App extends Component {
  render(){
    return (
      
     

    <Router>
      
      <React.Fragment>
       <Navbar />
       <PagesTitle />


       



       <div className='main'>
       <Routes>
         <Route exact path='/' element={<Productlist />}  />
         <Route path='/details' element={<Details />}/>
         <Route path='/cart' element={<Cart />}/>
         <Route  component={<Default />}/>

       </Routes>
       </div>
       <Modal />
      </React.Fragment>
      </Router>

   




     
      );
  }
 
}

export default App;
