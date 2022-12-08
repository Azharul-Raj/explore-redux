import { ADD_LIST, REMOVE_LIST } from "../ActionList/ActionList";

export const initialState = {
    data: false,
    todos:[]
}
export const TodoReducer = (state,{type,payload}) => {
    switch (type) {
        case ADD_LIST:
            return {
                ...state,
                todos:[...payload]
            }
        case REMOVE_LIST:
            return {
                ...state,
                data: true,
                todos:[]
            }
        default:
            return state;
    }
}