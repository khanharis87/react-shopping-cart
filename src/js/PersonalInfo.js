import React from 'react'

const PersonalInfo = React.createClass({
  render () {
    return (
      <div className='shopping-cart-personal-info container'>

        <div className='shopping-cart-personal-info-assigned-at row'>
          <p><strong>Aangevraagd om:</strong></p>
          <p className='text-muted'>Time</p>
        </div>

        <div className='shopping-cart-personal-info-email row'>
          <p><strong>Email:</strong></p>
          <p className='text-muted'>Time</p>
        </div>

        <div className='shopping-cart-personal-info-email row'>
          <p><strong>Telefoon:</strong></p>
          <p className='text-muted'>Telephone</p>
        </div>

      </div>
    )
  }
})

export default PersonalInfo
