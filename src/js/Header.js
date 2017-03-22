import React, { PropTypes } from 'react'

const Header = React.createClass({
  propTypes: {
    assignee: PropTypes.object.isRequired
  },

  render () {
    const {assignee} = this.props

    return (
      <div className='shopping-cart-header container'>

        <div className='row justify-content-md-center' style={{borderBottom: '1px solid #DCDCDC'}}>

          <div className='shopping-cart-header-left-icon col-4'>
            <i className='fa fa-angle-left fa-2x' />
          </div>

          <div className='shopping-cart-header-text col-4'>
            <h3>{assignee.name}</h3>
            <small className='text-muted'>{assignee.id}</small>
          </div>

          <div className='shopping-cart-header-print-icon col-4'>
            <i className='fa fa-print fa-2x' />
          </div>

        </div>

      </div>
    )
  }
})

export default Header
