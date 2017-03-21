// Entry point of the application
import React from 'react'
import { render } from 'react-dom'

import ShoppingCart from './ShoppingCart'
import shoppingCartData from '../../public/data.json'

render(<ShoppingCart shoppingCartData={shoppingCartData} />,
        document.getElementById('root')
)
