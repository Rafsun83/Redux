import { ADD_TO_CART } from '../Constants'
const initialSate = {
    cartData: []
}
export default function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer", action)
            return [
                ...state,
                { cartData: action.data }
            ]

        default:
            return state
    }

}