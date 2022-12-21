import React, {createContext, useState} from 'react'
import { PRODUCTS } from '../Products';

export const ShopContext = createContext(null);

export const initializeCart = () =>{
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1; i ++ ){
        cart[i] = 0
    }
    return cart;
}



export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(initializeCart());
    const calculateTotal = (itemId) => {
        let total = 0;
        for(let item in cartItems){
            for(let prod in PRODUCTS){
                if(prod.id === item){
                    total = total + (cartItems[item] * prod.price)
                }
            }
        }
        return total;
    
    }
    const addToCart = (itemId) => {
        setCartItems((prev) => {
           return {...prev, [itemId] : prev[itemId] + 1};
        })
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => {
          
                return {...prev, [itemId] : prev[itemId] - 1};
            
        })
    }
    const contextValue = {addToCart, removeFromCart, cartItems, calculateTotal}
    console.log(cartItems)

   

  return (
    <ShopContext.Provider value = {contextValue}>
          {props.children}
    </ShopContext.Provider>
  
  )
}
