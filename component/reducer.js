import React, { createContext, useReducer } from 'react'

const Context = createContext()
const initialState = []
export const ACTIONS = {
  ADD_TODOS : "add_todos",
  DELETE_TODOS: "delete_todos",
  CHECK_TODO : "check_todo"
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODOS: {
      return [...state, action.newTodo]
    }
    case ACTIONS.DELETE_TODOS : {
      return state.filter(todo => todo.id !== action.todoId)
    }
    case ACTIONS.CHECK_TODO : {
      return state.map(todo => {
        if (todo.id === action.todoId) {
          return {...todo, complete : !todo.complete}
        }
        return todo
      })
    }
    default: {
      return state
    }
  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);
  return (
    <Context.Provider value={{state, dispatch}} >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }