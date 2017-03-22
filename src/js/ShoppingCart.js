import React from 'react'

import PersonalInfo from './PersonalInfo'
import CartStatus from './CartStatus'
import ProductList from './ProductList'
import Header from './Header'

import shoppingCartData from '../../public/data.json'

/**
 * This is a presentational components which passes data as props to components
 *
 */
const ShoppingCart = React.createClass({

  render () {
    const {assignee, customer, status, assignedAt, items, placedAt} = shoppingCartData.data

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
