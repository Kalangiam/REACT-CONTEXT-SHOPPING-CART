import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product'
import "./shop.css"

export const Shop = () => {
    return (
        <div className='shopping'>
            <div className='Shoptitle'>
                <h1 className='text-center'><b>SHOPPING CART</b></h1>
            </div>
            <div className='products'>{PRODUCTS.map((product) => <Product key={product.id} data={product} images={product.images} />)}

            </div>
        </div>
    )
}
