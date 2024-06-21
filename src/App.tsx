
import './App.scss'
import  { useReducer, useState } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.scss';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [editingTodo, setEditingTodo] = useState<number | null>(null);

  return (
    <>

    <div className='todo-appc'>
      <h1>TODO</h1>
      </div>
      <div className="todo-app">
      <TodoForm dispatch={dispatch} editingTodo={editingTodo} setEditingTodo={setEditingTodo} todos={state.todos} />
      <TodoList todos={state.todos} dispatch={dispatch} setEditingTodo={setEditingTodo} />
    </div>
    </>
  )
}

export default App
