/**
 * Created by hariskhan on 20/03/17.
 */
import React from 'react'
import itemList from '../../public/data.json'

const ProductList = React.createClass({

  render () {
    return (
      <div>
        {
          itemList.data.items.map((item) => {
            return (
              <div>
                <label htmlFor={item.product.code}>
                  <input type='checkbox' id={item.product.code} />
                  <img src={item.product.imageUrl} />
                  <div className='name'>{item.product.name}</div>
                  <div className='description'>{item.product.description}</div>
                </label>
              </div>

            )
          })
        }
      </div>
    )
  }
})

export default ProductList
