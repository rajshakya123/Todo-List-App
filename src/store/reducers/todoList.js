import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [
    { id: 1, title: 'Buy groceries', email: 'xyz@gmail.com', completed: false },
    { id: 2, title: 'Walk the dog', email: 'abc@gmail.com', completed: true },
    { id: 3, title: 'Read a book', email: 'stv@gmail.com', completed: false }
  ]
};

let nextTodoId = 4;

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId++,
            title: action.payload.title,
            email: '',
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default todoList;
