import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import { useNavigate } from "react-router-dom"
import './cart.css'
export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()
    return (
        <div className='cart'>
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-6'></div>
            </div>
            <div>
                <h1>Your Cart Items</h1>
                <p className='total text-center'> Total : ${totalAmount}</p>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />
                    }
                })}
            </div>{
                totalAmount > 0 ? (<div className='checkout'>

                    <button onClick={() => navigate("/")}> Continue Shopping</button>
                </div>) : <h3>Your cart is empty</h3>
            }

        </div>
    )
}
