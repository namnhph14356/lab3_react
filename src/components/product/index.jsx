import React from "react"
import { useDispatch } from "react-redux"
import {currency} from "../../helper.js";

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const addToCart = (product) => {
    dispatch({
      type: "cart/add",
      payload: product
    })
  }
  console.log(product);
  return (
    <div className='product-container'>
      <h3>Product</h3>
      {product?.map(item => (
        <div className="product-item" onClick={() => addToCart(item)}>
          <h4>{item.name}</h4>
          <div>{currency(item.saleOffPrice)}</div>
          <img style={{ width: "50%" }} src={item.image} />
        </div>
      ))}
    </div>
  )
}

export default Product