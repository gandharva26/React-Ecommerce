import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shop-context'
export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const {addToCart, cartItems, removeFromCart} = useContext(ShopContext)
    const cartItemAmount = cartItems[id];
  return (
  
        <div className='product'>
            <img src ={productImage}>
            </img>
  <div className='description'>
    <p><b>{productName}</b></p>
    <p>${price}</p>
  </div>
<div>
         <button className='addToCartBttn' onClick={() => {
            return addToCart(id);
         }}>
            Add to Cart {cartItemAmount > 0 ? <>({cartItemAmount})</> : <></>} 
          
         </button>
         {cartItemAmount > 0 &&  <button className='removeFromCartBttn' onClick={() => {
            return removeFromCart(id);
         }}>-</button>}
        
        </div>
         </div>
  )
}
