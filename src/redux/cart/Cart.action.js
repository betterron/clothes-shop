import { CarttActionType } from "./Cart.type";

export const toggleCartHidden = () => ({
    type: CarttActionType.TOGGGLE_CART_HIDDEN,
})
export const addItem = (item) => ({
    type: CarttActionType.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: CarttActionType.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: CarttActionType.REMOVE_ITEM,
    payload: item
})