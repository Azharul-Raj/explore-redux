import React, { createContext, useContext } from 'react';

export const TodoContext = createContext();
const TodoProvider = ({children}) => {
    const datas={message:"hey"}
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