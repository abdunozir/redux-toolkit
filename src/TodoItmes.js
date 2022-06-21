import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoItems() {
  const todos = useSelector((state) => state.todos);
  return (
    <ul className='list-group'>
      { todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      )) }
    </ul>
  )
}

export default TodoItems