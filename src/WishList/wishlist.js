import React, {Component} from 'react';
import './wishlist.css';

import WishListItem from '../WishList-Item/wishlist-item';

class WishList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            WishList : []
        }

        this.createWishList = this.createWishList.bind(this);
        this.getWishList = this.getWishList.bind(this);

        this.getWishList();
    }

    getWishList = () => {

        const wishList = this.props.productList;

        this.setState({WishList : wishList});

        console.log(this.state.WishList);

    }

    createWishList = () => {

        const list = this.state.WishList.map((product) => 
            <WishListItem product={product} key={product._id}/>
        );

        return (list);
    }

    render() {
        return (
           <div className="card">
            <div className="card-block">
                <div className="card-title">
                    <h2>Wish List</h2>
                </div>
                <ul className="list-group">
                    {this.createWishList()}
                </ul>
            </div>
           </div>
        );
    }

}

export default WishList;