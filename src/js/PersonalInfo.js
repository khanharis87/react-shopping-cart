import React, { PropTypes } from 'react'

const PersonalInfo = React.createClass({
  propTypes: {
    customer: PropTypes.object.isRequired,
    assignedAt: PropTypes.string.isRequired
  },

  render () {
    const {email, phoneNumber} = this.props.customer
    const {assignedAt} = this.props
    const assignedAttDateArray = assignedAt.split(' ')
    const assignedAtDateForUi = `${assignedAttDateArray[1]} (${assignedAttDateArray[0]})`

    return (
      <div className='shopping-cart-personal-info container' style={{padding: '20px 20px'}}>

        <div className='shopping-cart-personal-info-assigned-at row'>
          <p><strong>Aangevraagd om:</strong></p>
          <p className='text-muted'>{assignedAtDateForUi}</p>
        </div>

        <div className='shopping-cart-personal-info-email row'>
          <p><strong>Email:</strong></p>
          <p className='text-muted'>{email}</p>
        </div>

        <div className='shopping-cart-personal-info-email row'>
          <p><strong>Telefoon:</strong></p>
          <p className='text-muted'>{phoneNumber}</p>
        </div>

      </div>
    )
  }
})

export default PersonalInfo
