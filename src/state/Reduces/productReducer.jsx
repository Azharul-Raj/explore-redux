import { FETCHING_END, FETCHING_START, FETCHING_SUCCESS } from "../ActionList/ActionList"

export const initialState = {
    loading: false,
    products: [],
    error:'false'
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                loading: true,
                error:false
        }
        case FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error:false
            }
        case FETCHING_END:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }
}