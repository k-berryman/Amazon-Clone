import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {rating}

        </div>
      </div>


      <img
        src={image}
        alt="Product Image"
      />


      <button>Add to Basket</button>

    </div>
  )
}

export default Product
