import React, { PropTypes } from 'react'
import ProductRow from './ProductRow'
import { connect } from 'react-redux'
import {setStatusToReserved, setStatusToNew} from './actionCreator'

/**
 * ProductList is the container component or smart component, it assign
 * changes to state and pass properties and functions to child component ProductRow
 **/
const ProductList = React.createClass({

  /**
   * Component property types.
   */
  propTypes: {
    items: PropTypes.array.isRequired,
    dispatchSetStatusToReservedForItem: PropTypes.func,
    dispatchSetStatusToNewForItem: PropTypes.func
  },

  /**
   * Takes care of changing the status of product and take the item{}
   * clicked as a param
   */
  handleProductCheckBoxClick (item) {
    if (document.getElementById(item.product.code).checked) {
      this.props.dispatchSetStatusToReservedForItem(item)
    } else {
      this.props.dispatchSetStatusToNewForItem(item)
    }
  },

  /**
   * Renders the presentation component. With items and handleProductCheckBoxClick passed to
   * ProductRow
   */
  render () {
    const {items} = this.props

    return (
      <div className='container'>
        {
          items.map((item) => {
            return (
              <ProductRow key={item.id} onChange={this.handleProductCheckBoxClick.bind(this, item)} item={item} />
            )
          })
        }
      </div>
    )
  }
})

/**
 * Maps all necessary state properties into the component properties
 */
const mapStateToProps = (state) => {
  console.log('state in component', state) // just a log when component re-renders and state is changed

  return {
    items: state
  }
}

/**
 * Wraps action creators into dispatch.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetStatusToReservedForItem (item) {
      dispatch(setStatusToReserved(item))
    },
    dispatchSetStatusToNewForItem (item) {
      dispatch(setStatusToNew(item))
    }
  }
}

/**
 * Connected component.
 */
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
