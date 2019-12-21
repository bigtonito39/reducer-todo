

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
    case "ADD_TODO":
        return {...state, item: action.payload, completed:false,}
}
  }