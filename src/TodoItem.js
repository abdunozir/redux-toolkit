import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleComplate } from './store/todoSlice';

function TodoItem({id, title, completed}) {

  const dispatch = useDispatch();

  const handleComplateClick = () => {
    dispatch(
      toggleComplate({ id: id, completed: !completed})
    )
  }

  const deleteComplateClick = () => {
    dispatch(
      deleteTodo({ id: id })
    )
  }

  return (
    <li className="list-group-item">
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center' >
          <label htmlFor={id}>
            <input type="checkbox" id={id} className='me-3' onChange={handleComplateClick} defaultChecked={completed} />
           <h4  style={{display: 'inline', color: completed ? 'red' : 'black' }}>{title}</h4>
          </label>
        </span>
        <button className='btn btn-danger' onClick={deleteComplateClick}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem