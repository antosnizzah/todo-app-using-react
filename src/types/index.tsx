export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export interface TodoState {
    todos: Todo[];
  }
  
  export type ActionType =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number }
    | { type: 'UPDATE_TODO'; payload: { id: number; text: string } };
  