import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from './store/Counter';

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = (amount) => {
    dispatch(counterActions.increment(amount))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleHandler = () => {
    dispatch(counterActions.toggle())
  }

  return (
    <div className={classes.counter}>
      <h1>Redux Counter</h1>
     {show &&  <h2>Counter Value: {counter} </h2> }

      <button className='btn btn-primary' onClick={decrementHandler}>Decrement -1</button>
      <button className='btn btn-primary m-2' onClick={() => incrementHandler(1)}>Increment +1</button>
      <button className='btn btn-primary m-2' onClick={() => incrementHandler(10)}>Increment +10</button>
      <button className='btn btn-primary' onClick={toggleHandler}>Toggle Counter</button>
    </div>
  )
}

export default Counter