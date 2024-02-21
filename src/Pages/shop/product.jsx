import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Product = (props) => {

    const { id, title, price, thumbnail, images, description, brand, discountPercentage, rating} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

    return (
        <div className='product'>
            <img src={thumbnail} />
            <div className='description'>
                <h5><b>{title}</b></h5>
                <p><b>Brand: {brand}</b></p>
                <p className='bg-dark text-light'>Price :<b className='text-warning'> $ {price}</b></p>
                <p className='text-primary bg-body-secondary'><b>Discount : {discountPercentage} %</b></p>
                <p className='text-info bg-body-tertiary'><b>Rating : {rating} / 5</b></p>
                <p>{description}</p>

            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    )
}
