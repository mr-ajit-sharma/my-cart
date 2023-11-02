
import 'firebase/firestore';
import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

// here we are handling  the database
import db from './Firebase'
import { deleteDoc, updateDoc, doc, getDocs, addDoc, collection } from 'firebase/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
      ]
    }
  }

  // here we are reading the data from the firebase
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

  handleIncreaseQuantity = async (product) => {
    const docRef = doc(db, 'products', product.id);
    
    const newQty = product.qty + 1;

    try {
      await updateDoc(docRef, {
        qty: newQty
      });

      // Update the local state with the new quantity
      const updatedProducts = this.state.products.map((p) => {
        if (p.id === product.id) {
          return { ...p, qty: newQty };
        }
        return p;
      });

      this.setState({ products: updatedProducts });

      console.log("Quantity updated successfully");
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  }

  //handling the dlete the product from the firestore 
  handleDeleteQuantity = async (id) => {//here we have pass the id the particular product id
    try {
      const docRef = doc(db, "products", id);
      await deleteDoc(docRef)
      const updatedProducts = this.state.products.filter((p) => p.id !== id)//here we are maintaining the state
      this.setState({
        products: updatedProducts
      })
    } catch (error) {
      console.log(error, "error in deleting the product")
    }
  }

  handleDecreaseQuantity = async (product) => {
    const docRef = doc(db, 'products', product.id);
    const newQty = product.qty - 1;

    if (newQty < 0) {
      return; // Don't allow negative quantities
    }

    try {
      await updateDoc(docRef, {
        qty: newQty
      });


      const updatedProducts = this.state.products.map((p) => {
        if (p.id === product.id) {
          return { ...p, qty: newQty };//here we are returning the single product with current state of the quantity
        }
        return p;
      });

      this.setState({ products: updatedProducts });//her we are set state and passing as products to a updatedproducts

      console.log("Quantity updated successfully");
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  }



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
      return product
    })
    return cartTotal
  }

  // add in firebase
  addProduct = async () => {
    const productObject = {
      img: "",
      name: "bractor",
      price: 40000,
      qty: 1
    }
    const docRef = await addDoc(collection(db, "products"), productObject

    )
    this.setState((prevState) => {
      return { products: [...prevState.products, { ...productObject, id: docRef.id }] }
    })
  }

  render() {
    const { products, loading } = this.state
    // console.log(products)
    return (
      <div className="App">
        <div><Navbar
          count={this.getCountProduct()}
        /></div>
        <div>
          <button style={{ padding: 10 }} onClick={this.addProduct}>Add Product</button>
        </div>
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
