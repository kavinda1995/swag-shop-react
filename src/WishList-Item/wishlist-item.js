import React, {Component} from 'react';
import './wishlist-item.css';

class WishListItem extends Component {

    render() {
        return (
            <li className="list-group-item">
                <a className="btn btn-outline-danger">X</a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }

}

export default WishListItem;