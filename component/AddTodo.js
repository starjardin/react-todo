import React, { useContext, useState } from 'react'
import { ACTIONS } from './reducer'
import { Context } from './reducer'
import styled from 'styled-components'

const FormStyles = styled.form`
  label, input {
    display : block;
  }

  input {
    padding : .5rem 1rem;
    width : 80vw;
    border : 1px solid #ccc;
    border-radius : 4px;
    box-shadow : 1px 1px 1px 1px #ccc;
  }

  label {
    padding-inline : 0;
    padding-block : 1rem;
  }

  button {
    margin : 1em 0;
  }
`

export default function AddTodo() {
  const { dispatch } = useContext(Context)
  const [todo, setTodo] = useState('')

  function Addtodo(e) {
    e.preventDefault()
    if (todo.trim() === "") {
      alert("Make sure you have something todo")
      return
    }
    const newTodo = {
      todo,
      id: Date.now(),
      complete : false
    }
    dispatch({ type: ACTIONS.ADD_TODOS, newTodo })
    setTodo('')
  }

  return (
    <FormStyles onSubmit={Addtodo}>
      <label>Add Todo</label>
      <input
        type="text"
        name="todo"
        autoComplete="off"
        value={todo}
        placeholder="Add todo here..."
        onChange={(e) => (setTodo(e.target.value))}
      />
      <button>Add</button>
    </FormStyles>
  )
}
