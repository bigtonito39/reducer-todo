

export const intialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 38929840050,
    
  },
  {
    item: 'Become a javaScript Expert',
    completed: false,
    id: 38929864054,
    
  },
  {
    item: 'I love React!',
    completed: false,
    id: 3892987589,
    
  }

]

  export const todoReducer = (state, action) => {
     switch(action.type) {
        case "ADD_TODO" :
        return [...state, action.payload];
        case "TOGGLE_TODO":
        return  /*
        Check this out and see how you would make it work:
        case 'TOGGLE_ITEM': // Check for toggled items
        return{ 
          ...state,
          todos: state.todos.map( todo => {
            if(todo.id === action.payload) {
              return {...todo, completed: !todo.completed}
            }  else {
              return todo;
            }
          })
        };
        
        */        
        default:
    return state
}

  }