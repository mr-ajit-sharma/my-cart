import React from 'react'
import MyCart from './CartItem'
class Cart extends React.Component {
    render() {
        return (
            <div className='cart'>
                <div><MyCart/></div>
                <div><MyCart/></div>

            </div>

        )


    }
    }
export default Cart