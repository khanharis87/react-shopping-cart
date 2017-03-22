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
    const placedAtDateArray = placedAt.split(' ')
    const placedDateForUi = `${placedAtDateArray[1]} (${placedAtDateArray[0]})`

    return (
      <div className='shopping-cart-status container' style={{backgroundColor: '#D3D3D3', padding: '20px 20px'}}>
        <div className='row'>
          <div className='shopping-cart-status-heading col' style={{paddingBottom: '5px'}}><b>Status</b></div>
          <div className='shopping-cart-status-heading-user-name col' style={{paddingBottom: '5px'}}><b>From</b></div>
          <div className='shopping-cart-status-heading-user-time col' style={{paddingBottom: '5px'}}><b>Time</b></div>
          <div className='w-100' />
          <div className='shopping-cart-status-progress col'>{status}</div>
          <div className='shopping-cart-status-user-name col'>{name}</div>
          <div className='shopping-cart-status-user-time col'>{placedDateForUi}</div>
        </div>
      </div>
    )
  }
})

export default CartStatus
