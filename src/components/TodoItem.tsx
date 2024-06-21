import React from 'react';
import { Todo, ActionType } from '../types';

interface TodoItemProps {
  todo: Todo;
  dispatch: React.Dispatch<ActionType>;
  setEditingTodo: React.Dispatch<React.SetStateAction<number | null>>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, dispatch, setEditingTodo }) => {
  return (
    <li>
      <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => setEditingTodo(todo.id)}>edit✏️</button>
      <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>delete🗑️</button>
    </li>
  );
};

export default TodoItem;
