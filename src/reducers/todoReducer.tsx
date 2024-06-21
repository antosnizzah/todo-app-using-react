import { TodoState, ActionType } from '../types';

const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]'),
};

const todoReducer = (state: TodoState, action: ActionType): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = { id: Date.now(), text: action.payload, completed: false };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return { todos: updatedTodos };

    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(toggledTodos));
      return { todos: toggledTodos };

    case 'DELETE_TODO':
      const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
      return { todos: filteredTodos };

    case 'UPDATE_TODO':
      const updatedTodoList = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodoList));
      return { todos: updatedTodoList };

    default:
      return state;
  }
};

export { todoReducer, initialState };
