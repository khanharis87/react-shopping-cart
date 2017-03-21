/**
 * Created by hariskhan on 20/03/17.
 */
import React, { PropTypes } from 'react'

import ProductRow from './ProductRow'

const ProductList = React.createClass({

  propTypes: {
    items: PropTypes.array.isRequired
  },

  handleProductCheckBoxClick (e) {
    console.log('handleChange', e.target.value)
    if (!e.target.checked) {
      e.target.value = 'RESERVED'
    }
  },

  render () {
    const {items} = this.props
    const handleProductCheckBoxClick = this.handleProductCheckBoxClick

    return (
      <div>
        {
          items.map((item) => {
            return (
              <ProductRow key={item.id} onChange={handleProductCheckBoxClick} item={item} />
            )
          })
        }
      </div>
    )
  }
})

export default ProductList
