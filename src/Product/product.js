import React, {Component} from 'react';
import './product.css';

class Product extends Component {

    render() {
        return (
            <div className="card product">
                <img className="card-img-top" src={this.props.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <div className="card-title">
                        {this.props.title}
                    </div>
                    <div className="card-text">
                        Price : ${this.props.price}
                    </div>
                    <button className="btn btn-primary">Add to Wishlist</button>
                </div>
            </div>
        );
    }

}

export default Product;