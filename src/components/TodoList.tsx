import React from 'react';
import { Todo, ActionType } from '../types';
import TodoItem from '../components/TodoItem';

interface TodoListProps {
  todos: Todo[];
  dispatch: React.Dispatch<ActionType>;
  setEditingTodo: React.Dispatch<React.SetStateAction<number | null>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, dispatch, setEditingTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} setEditingTodo={setEditingTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
