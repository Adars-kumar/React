import { createContext, useContext } from "react";


export const TodoContext = createContext({ 
    // values
    todos:[
        {
            id:1,
            todo: "Todo message",
            completed: false
        }
    ],
    // Methods
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider