import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          name: "I phone",
          qty: 1,
          price: 1000,
          img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          name: "safari",
          qty: 2,
          price: 20000,
          img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          id: 5
        },
        {
          name: "Bike",
          qty: 2,
          price: 4000,
          img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          name: "laptop",
          qty: 5,
          price: 11000,
          img: 'https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          id: 3
        },
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    console.log("plz increase the product", product)
    const { products } = this.state
    const index = products.indexOf(product);
    products[index].qty += 1
    this.setState({
      products: products
    })

  }

  handleDecreaseQuantity = (product) => {
    console.log("plz decrease the quantity", product)
    const { products } = this.state
    const index = products.indexOf(product)
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1

    this.setState({
      products: products
    })
  }

  handleDeleteQuantity = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id)
    this.setState({
      products: items
    })
  }
  getCountProduct = ()=>{
    const {products}=this.state
    let count=0;
    products.forEach((product)=>{
      count+=product.qty
    })
    return count
  }

  getTotal=()=>{
const {products}=this.state
let cartTotal=0
products.map((product)=>{
  cartTotal=cartTotal+product.qty*product.price
})
return cartTotal
  }
  render() {
    const { products } = this.state
    return (
      <div className="App">
        <div><Navbar
          count={this.getCountProduct()}
        /></div>
        <div><Cart
          products={products}
          onIncrease={this.handleIncreaseQuantity}
          onDecrease={this.handleDecreaseQuantity}
          onDelete={this.handleDeleteQuantity}
        /></div>
        <div >
          Total:{this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;
