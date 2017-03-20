import React from 'react'

const CartStatus = React.createClass({
  render () {
    return (
      <div className='shopping-cart-status container'>
        <div className='row'>
          <div className='shopping-cart-status-heading col'>Status</div>
          <div className='shopping-cart-status-heading-user-name col'>From</div>
          <div className='shopping-cart-status-heading-user-time col'>Time</div>
          <div className='w-100' />
          <div className='shopping-cart-status-progress col'>in progress</div>
          <div className='shopping-cart-status-user-name col'>Name</div>
          <div className='shopping-cart-status-user-time col'>10:00</div>
        </div>
      </div>
    )
  }
})

export default CartStatus
