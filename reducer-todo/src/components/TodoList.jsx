import React, {useState, useReducer} from "react";
import Todo from "./Todo";
import {intialState, todoReducer} from "../reducers/Reducers";
import TodoForm from "../components/TodoForm";

const TodoList = () => {

const [newTodo, setNewTodo] = useState("");
const [state,dispatch] = useReducer(todoReducer,intialState)

console.log(state)

const addTodoList = userInput => {
    const newItem= ({
        item: userInput,
        completed: false,
        id: Date.now(),
    }) 
    setNewTodo([...state, newItem])
     

}


 return (
     <div>
      <TodoForm addTodoList={addTodoList} />   
     {state.map(item => {
         return <Todo todo={item} key={item.id}/>
     })}
     </div>
     )    
}

export default TodoList;