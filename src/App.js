import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItems from './TodoItmes';
import TotalItems from './TotalItems';

function App() {
  return (
    <div className="App container bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoItems />
      <TotalItems />
    </div>
  );
}

export default App;
