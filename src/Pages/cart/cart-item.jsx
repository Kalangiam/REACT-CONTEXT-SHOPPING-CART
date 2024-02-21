import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const CartItem = (props) => {


    const { id, title, price, thumbnail } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
        ;

    return <div className='cartItem text-center'>
        {/* <img src={thumbnail} /> */}
        <div className='description'>
            <p>Product : <b>{title}</b></p>
            <p>Price : <b className='text-danger'>$ {price}</b></p>

            <div className='countHandler'>
                <p>Quantity</p>
                <button onClick={() => removeFromCart(id)} > - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>

}
