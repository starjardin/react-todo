import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { Context, ACTIONS } from './reducer'

const ListTodoStyles = styled.li`
  list-style : none;
  display : flex;
  justify-content : space-between;
  padding : .5rem 0;
  .completed {
    text-decoration : line-through;
  }
`

export default function TodosList({ todo }) {
  const { dispatch } = useContext(Context)
  const [completeTodos, setCompleteTodos] = useState(false)

  function checkTodo(todoId) {
    dispatch({ type: ACTIONS.CHECK_TODO, todoId })
    setCompleteTodos(!completeTodos)
  }

  const deleteTodos = (todoId) => {
    dispatch({ type: ACTIONS.DELETE_TODOS, todoId })
  }

  return (
    <>
     <ListTodoStyles>
        <input
          type="checkbox"
          checked={completeTodos}
          onChange={() => checkTodo(todo.id)}
        />
        {
          todo.complete
            ? <span className="completed">{todo.todo}</span>
            : <span>{todo.todo}</span>
        }
        <button onClick={() => deleteTodos(todo.id)}>Delete</button>
      </ListTodoStyles>
      <hr />
    </>
  )
}
