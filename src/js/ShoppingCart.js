import React, { PropTypes } from 'react'

import PersonalInfo from './PersonalInfo'
import CartStatus from './CartStatus'
import ProductList from './ProductList'
import Header from './Header'

const ShoppingCart = React.createClass({
  propTypes: {
    shoppingCartData: PropTypes.object.isRequired
  },

  render () {
    const {assignee, customer, status, assignedAt, items, placedAt} = this.props.shoppingCartData.data

    return (
      <div>
        <Header assignee={assignee} />
        <PersonalInfo customer={customer} assignedAt={assignedAt} />
        <CartStatus status={status} customer={customer} placedAt={placedAt} />
        <ProductList items={items} />
      </div>
    )
  }
})

export default ShoppingCart
