import React, { useContext } from 'react'

import { Context } from './reducer'
import TodosList from './TodosList'

export default function Todos() {
  const { state } = useContext(Context)
  return (
    <ul>
      {state.map((todo, index)=> (
        <TodosList key={index} todo={ todo }/>
      ))}
    </ul>
  )
}
