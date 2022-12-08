import React, { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { initialState, TodoReducer } from '../state/Reduces/TodoReducer';

export const TodoContext = createContext();
const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const datas={state,dispatch}
    return (
        <TodoContext.Provider value={datas}>
            {
                children
            }
        </TodoContext.Provider>
    );
};

export const  useData = () => {
    const data = useContext(TodoContext);
    return data;
}
export default TodoProvider;