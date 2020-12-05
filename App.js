import React, { useContext } from 'react'
import AddTodo from './component/AddTodo'

import { Context } from './component/reducer'
import Todos from './component/Todos'

export default function App() {
  const { state, dispatch } = useContext(Context)

  return (
    <>
      <Todos />
      <AddTodo />
    </>
  )
}
