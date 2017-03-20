import React from 'react'

import PersonalInfo from './PersonalInfo'
import CartStatus from './CartStatus'
import ProductList from './ProductList'
import Header from './Header'

const ShoppingCart = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <PersonalInfo />
        <CartStatus />
        <ProductList />
      </div>
    )
  }
})

export default ShoppingCart
