import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';

function AddTodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      title: value
    }))
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <div className="flex-grow-1 align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder='Add todo...'
            value={value}
            onChange={(e) => setValue(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
  )
}

export default AddTodoForm