import './CartDropdown.scss'
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";

import React from 'react'
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from "react-router-dom";
import { CarttActionType } from '../../redux/cart/Cart.type';
import { toggleCartHidden } from '../../redux/cart/Cart.action';


function CartDropdown({ cartItems, history, toggleCartHidden }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? cartItems.map(item => <CartItem item={item} key={item.id} />)
                        : <span className="empty-message">Your cart is empty</span>}
            </div>
            <CustomButton onClick={() => { history.push('/checkout'); toggleCartHidden() }}>GO TO CHECKOUT</CustomButton >
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
const mapDispatchToprops = dispatch => ({
    toggleCartHidden: () => { dispatch(toggleCartHidden()) }
})
export default withRouter(connect(mapStateToProps, mapDispatchToprops)(CartDropdown))