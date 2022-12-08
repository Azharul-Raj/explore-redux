import { ADD_LIST, DELETE_ONE, REMOVE_LIST } from "../ActionList/ActionList";

export const initialState = {
    data: false,
    todos: [],
    idx:''
}
export const TodoReducer = (state, { type, payload, idx}) => {
    console.log(idx);
    switch (type) {
        case ADD_LIST:
            return {
                ...state,
                todos: state.todos.concat(payload)
            }
        case REMOVE_LIST:
            return {
                ...state,
                data: true,
                todos:[]
            }
        case DELETE_ONE:
           return {
               ...state,
               todos:state.todos.filter((_,i)=>i!==idx)
        }
        default:
            return state;
    }
}