import React from 'react'
import MyCart from './CartItem'
const Cart =(props)=> {
    const { products } = props
    
        return (
            <div className='cart'>
                {products.map((product) => {
                    return <MyCart
                        product={product}
                        key={product.id}
                        onIncrease={props.onIncrease}
                        onDecrease={props.onDecrease}
                        onDelete={props.onDelete}
                    />
                })}


            </div>

        )


    }
export default Cart