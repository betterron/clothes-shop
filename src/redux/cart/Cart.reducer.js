import { CarttActionType } from "./Cart.type";
import { addItemToCart, removeItemToCart } from "./cart.utils";

const initialState = {
    hidden: true,
    cartItems: []
}


export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CarttActionType.TOGGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden }
        case CarttActionType.ADD_ITEM:
            console.log(payload);
            return { ...state, cartItems: addItemToCart(state.cartItems, payload) }
        case CarttActionType.CLEAR_ITEM_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id) }
        case CarttActionType.REMOVE_ITEM:
            console.log(payload);
            return { ...state, cartItems: removeItemToCart(state.cartItems, payload) }
        default:
            return state
    }
}
