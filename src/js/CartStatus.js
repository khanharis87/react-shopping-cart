import React, { PropTypes } from 'react'

const CartStatus = React.createClass({
  propTypes: {
    status: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    placedAt: PropTypes.string.isRequired
  },

  render () {
    const {status, placedAt} = this.props
    const {name} = this.props.customer

    return (
      <div className='shopping-cart-status container'>
        <div className='row'>
          <div className='shopping-cart-status-heading col'>Status</div>
          <div className='shopping-cart-status-heading-user-name col'>From</div>
          <div className='shopping-cart-status-heading-user-time col'>Time</div>
          <div className='w-100' />
          <div className='shopping-cart-status-progress col'>{status}</div>
          <div className='shopping-cart-status-user-name col'>{name}</div>
          <div className='shopping-cart-status-user-time col'>{placedAt}</div>
        </div>
      </div>
    )
  }
})

export default CartStatus
