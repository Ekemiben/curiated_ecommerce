import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export class Navbar extends Component {
  render() {
    return (
      <div>
          <Link to='/'> NavBar
          {/* Image can be here */}
          </Link>
          <header className="row">
            <div>
                <a className="brand" href = "index.html">WOMEN</a>
                <a className="brand" href = "index.html">MEN</a>
                <a className="brand" href = "index.html">KIDS</a>
            </div>
            <div>
                {/* <label for="cars">$<i className="fa-solid fa-basket-shopping"></i></label> */}

                <select name="currency" className="currency">
                  <option value="dollar">$ USD</option>
                  <option value="eur"> € EUR </option>
                  <option value="jap">¥ JPY</option>
                  
                </select>
                <Link to='/cart' className='basket'>
                    <button className='btn cart'> My Cart
                    <img src='images/bascket icon.jpg' alt='bascket' ></img>
                    </button>
                    
                </Link>
            </div>
        </header>
      </div>
    )
  }
}

export default Navbar