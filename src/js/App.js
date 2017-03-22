// Entry point of the application
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import ShoppingCart from './ShoppingCart'

render(
  <Provider store={store}>
    <ShoppingCart />
  </Provider>,
  document.getElementById('root')
)
