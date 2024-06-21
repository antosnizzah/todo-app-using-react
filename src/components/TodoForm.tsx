import React, { useState, useEffect } from 'react';
import { ActionType, Todo } from '../types';

interface TodoFormProps {
  dispatch: React.Dispatch<ActionType>;
  editingTodo: number | null;
  setEditingTodo: React.Dispatch<React.SetStateAction<number | null>>;
  todos: Todo[];
}

const TodoForm: React.FC<TodoFormProps> = ({ dispatch, editingTodo, setEditingTodo, todos }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTodo !== null) {
      const todoToEdit = todos.find(todo => todo.id === editingTodo);
      if (todoToEdit) {
        setText(todoToEdit.text);
      }
    }
  }, [editingTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodo !== null) {
      dispatch({ type: 'UPDATE_TODO', payload: { id: editingTodo, text } });
      setEditingTodo(null);
    } else {
      dispatch({ type: 'ADD_TODO', payload: text });
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button type="submit">{editingTodo !== null ? 'Update Todo' : 'Add Todo'}</button>
    </form>
  );
};

export default TodoForm;
