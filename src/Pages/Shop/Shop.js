import React from 'react'
import { PRODUCTS } from '../../Products'
import { Product } from './Product'
import '../Shop/Shop.css'
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Amazon store</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product) => {return <Product data = {product}/>})}
        </div>
    </div>
  )
}
