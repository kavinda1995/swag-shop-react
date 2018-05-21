import React, {Component} from 'react';
import './product.css';

class Product extends Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" alt="Product"></img>
                <div className="card-block">
                    <div className="card-title">
                        Product Title
                    </div>
                    <div className="card-text">
                        Price : $100
                    </div>
                    <button className="btn btn-primary">Add to Wishlist</button>
                </div>
            </div>
        );
    }

}

export default Product;