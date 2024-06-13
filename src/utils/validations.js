export const isDuplicateTodo = (todos, newTitle) => {
    return todos.some(todo => todo.title.toLowerCase() === newTitle.toLowerCase());
  };