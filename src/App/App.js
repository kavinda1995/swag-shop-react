import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import './App.css';
import HttpService from '../Services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then((data) => {
      console.log(data);
    },err => {
      console.log("Error", err);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Swag Shop</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
