import { combineReducers } from 'redux';
import todoList from './todoList';

const rootReducer = combineReducers({
  todos: todoList,
});

export default rootReducer;