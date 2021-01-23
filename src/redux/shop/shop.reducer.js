import SHOP_DATA from "./SHOP_DATA"

const initialState = {
    collections: SHOP_DATA
}

export default (state = initialState, { type, payload }) => {
    switch (type) {


        default:
            return state
    }
}
