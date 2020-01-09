

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
        case "TOGGLE_TODO":
        return state.map(item => {
          if (item.id === action.payload) {
            return {...item, completed: !item.completed};
          }
          else {
            return item;
          }
        })
        case "ADD_TODO" :
        return [...state, action.payload];
        case "DELETE_TODO":
        return state.filter(item => {
          //this will filter and keep whatever is false, and whatever is true it will delete
          return !item.completed
        }) 
         
        
        default:
    return state
}

  }