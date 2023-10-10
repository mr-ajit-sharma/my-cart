import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

// here we are handling  the database
import db from './Firebase'
import { collection, getDocs } from 'firebase/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
      ]
    }
  }


  getData = async () => {
    const snapshot = await getDocs(collection(db, "products"))
    const products = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    this.setState({
      products,
      loading: false
    })
  }

  componentDidMount() {
    this.getData()
  }

  handleIncreaseQuantity = (product) => {
      const { products } = this.state
      const index = products.indexOf(product);
      products[index].qty += 1
      this.setState({
          products: products
        })
      }

  handleDecreaseQuantity = (product) => {
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

  // getCountProduct = () => {
  //   const { products } = this.state
  //   let count = 0;
  //   products.forEach((product) => {
  //     count += Number(product.qty)
  //   })
  //   return count
  // }

  getCountProduct = () => {
    const { products } = this.state
    let count = 0;
    products.forEach((product) => {
      count += Number(product.qty)
    })
    return count
  }

  getTotal = () => {
    const { products } = this.state
    let cartTotal = 0
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })
    return cartTotal
  }

  render() {
    const { products, loading } = this.state
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
        {loading && <h1>Loading...</h1>}
        <div style={{ display: 'flex', fontSize: 20, fontStyle: 'bold' }}>
          Total:{this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;
