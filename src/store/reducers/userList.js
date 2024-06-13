const initialUserState = {
    name: '',
    email: ''
  };
  
  const userList = (state = initialUserState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          name: action.payload.name,
          email: action.payload.email
        };
      default:
        return state;
    }
  };
  
  export default userList;
  