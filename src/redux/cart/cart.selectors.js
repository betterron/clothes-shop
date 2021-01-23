import { createStore } from "redux";
import { createSelector } from "reselect";


// tham so state se dc truyen vao trong cac component su dung mapStateToProps. 
const selectCart = state => state.cartReducer

// when use createSelector to create => memoir selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, currentValue) => (accumulator + currentValue.quantity), 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, currentValue) => (accumulator + currentValue.quantity * currentValue.price), 0)
)













