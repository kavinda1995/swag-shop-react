import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import './App.css';

//Components
import Product from '../Product/product';
import WishList from '../WishList/wishlist';

//Services
import HttpService from '../Services/http-service';
const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products:[]};

    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    let self = this;
    http.getProducts().then((data) => {
      self.setState({products : data});
    },err => {
      alert("Error while getting data from API. Error : ", err);
      console.log("Error", err);
    });
  }

  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
      </div>
    );

    return (list);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Swag Shop</h1>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
                <WishList productList={this.state.products}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
