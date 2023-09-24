import React from 'react'
import MyCart from './CartItem'
class Cart extends React.Component {
    constructor() {
        super();
        this.state ={
            products:[
                {
                    name: "I phone",
                    qty: 1,
                    price: 1000,
                    img: '',
                    id:1
                },
                {
                    name: "nokia",
                    qty: 2,
                    price: 4000,
                    img: '',
                    id:2
                },
                {
                    name: "laptop",
                    qty: 5,
                    price: 11000,
                    img: '',
                    id:3
                },
            ] 
        }

                
        
    }
    render() {
        const {products}=this.state                
        return (
            <div className='cart'>
                {products.map((product)=>{
                    return <div><MyCart
                     product={product} 
                     key={product.id}
                     /></div>
                })}
                

            </div>

        )


    }
    }
export default Cart