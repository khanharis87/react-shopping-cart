import React from 'react'

const Header = React.createClass({
  render () {
    return (
      <div className='shopping-cart-header container'>
        <div className='row justify-content-md-center'>
          <div className='shopping-cart-header-left-icon col'>
            <i className='fa fa-angle-left fa-2x' aria-hidden='true' />
          </div>
          <div className='shopping-cart-header-text col-md-auto'>
            <h3>Title</h3>
            <small className='text-muted'>Number</small>
          </div>
          <div className='shopping-cart-header-print-icon col'>
            <i className='fa fa-print fa-2x' aria-hidden='true' />
          </div>
        </div>
      </div>
    )
  }
})

export default Header
