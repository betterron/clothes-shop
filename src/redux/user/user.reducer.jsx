import { UserActionTypes } from "./user.type"

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case UserActionTypes.SET_CURRENT_USER:
            return { ...state, currentUser: payload.currentUser }

        default:
            return state
    }
}
export default userReducer