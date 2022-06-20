import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { userActions } from './store/User';

function App() {
  const user = useSelector((state) => state.user.name);
  console.log(user);
  const dispatch = useDispatch();
  const one = () => {
    dispatch(userActions.addUser());
  }
  return (
    <div className="App">
      <h1 onClick={one}>Hello Redux {user}</h1>
      <Counter />
    </div>
  );
}

export default App;
