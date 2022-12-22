import {React, useContext} from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../Context/shop-context'
import { CartItem } from './CartItem'
import '../Cart/cart.css'
export const Cart = () => {
    const {addToCart, cartItems, removeFromCart, calculateTotal} = useContext(ShopContext)
  return (
    <div className='cart'> 
    <h1>Cart items</h1>
    <div className='cartItems'>
        {PRODUCTS.map((product) => {
            if(cartItems[product.id]){
return <CartItem data = {product}/>
            }
        })}
        <div>Total : ${calculateTotal()} </div>
      
    </div>
    </div>
  )
}
