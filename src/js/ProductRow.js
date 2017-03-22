import React, { PropTypes } from 'react'

/**
 * Presentational component and child of ProductList
 */
const ProductRow = React.createClass({
  propTypes: {
    item: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  },

  render () {
    const { code, name, imageUrl, description } = this.props.item.product
    const {status} = this.props.item
    const {onChange} = this.props

    return (
      <div>
        <label htmlFor={code}>
          <input type='checkbox' id={code} onChange={onChange} value={status} />
          <img src={imageUrl} />
          <div className='name'>{name}</div>
          <div className='description'>{description}</div>
        </label>
      </div>
    )
  }
})

export default ProductRow
