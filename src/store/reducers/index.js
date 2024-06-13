import { combineReducers } from 'redux';
import todoList from './todoList';
import userList from './userList';

const rootReducer = combineReducers({
  todos: todoList,
  users:userList
});

export default rootReducer;