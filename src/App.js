import React from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import data from "./data.json"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products:data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size:"",
      sort:"",
    };
  }
  createOrder = (order) =>{
    alert("Need to save order for " + order.name);
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    cartItems.forEach(item=>{
      if(item._id == product._id){
        if(item.count == 1){
          this.setState({
          cartItems: cartItems.filter((x)=>x._id !== product._id),
          });
          localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x)=>x._id !== product._id)));
        }
        else{
          item.count--;
          this.setState({cartItems})
          localStorage.setItem("cartItems", JSON.stringify(cartItems)); 
        }    
      }
    });
    
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item=>{
      if(item._id == product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product,count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">Food Ordering System</a>
      </header>
    <main> 
      <div className="content">
        <div className="main"> 
          <Products products={this.state.products} addToCart={this.addToCart}></Products>
        </div>
        <div className="sidebar">
          <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder}/>
        </div>
      </div>  
    </main>
    <footer>All right is reserved</footer>
    </div>
  );
}
}

export default App;
