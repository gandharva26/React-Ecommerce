import {React, useContext} from 'react'
import { ShopContext } from '../../Context/shop-context';
export const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems, removeFromCart} = useContext(ShopContext)
  const cartItemAmount = cartItems[id];
  return (
    <div className='cartItem'>
    <img src ={productImage}>
            </img>
  <div className='description'>
    <p><b>{productName}</b></p>
    <p>${price}</p>
    <div>
    <button  onClick={() => {
            return addToCart(id);
         }}>
            + 
          
         </button>

    {cartItemAmount > 0 && <div> Quantity: ({cartItemAmount}) <button className='removeFromCartBttn' onClick={() => {
            return removeFromCart(id);
         }}>-</button></div>}
         </div>
  </div>
    </div>
  )
}
