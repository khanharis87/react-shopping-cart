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
      <div className='row form-group' style={{paddingTop: '10px'}}>
        <label className='control-label' htmlFor={code}>
          <input type='checkbox' id={code} onChange={onChange} value={status} />
          <img src={imageUrl} />
          <h4 className='name' style={{display: 'inline-block'}}>{name}</h4>
          <div className='description'>{description}</div>
        </label>
      </div>
    )
  }
})

export default ProductRow
