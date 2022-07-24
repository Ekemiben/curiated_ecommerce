import React, { Component } from 'react'

export class Empty extends Component {
  render() {
    return (
      <div>
          <div className='empty cart'>
              <p> Your cart is currenly empty</p>
          </div>
      </div>
    )
  }
}

export default Empty