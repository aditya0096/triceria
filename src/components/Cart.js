import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.lenght === 0 ? ( <div className="cart-header">Cart is Empty</div>
                ) : ( <div className="cart-header">You have {cartItems.length} in the cart{""}
                </div>
                )}
            </div>
            <div>
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={cartItems._id}>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
