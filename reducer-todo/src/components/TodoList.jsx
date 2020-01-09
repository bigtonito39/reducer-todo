import React, {useState, useReducer} from "react";
import Todo from "./Todo";
import {intialState, todoReducer} from "../reducers/Reducers";
import TodoForm from "../components/TodoForm";

const TodoList = () => {
const [state,dispatch] = useReducer(todoReducer,intialState)



const addTodoList = data => {
    
    const newItem= ({
        item:data,
        completed: false,
        id: Date.now(),
    }) 
  
    dispatch({type:"ADD_TODO", payload:newItem})
}

const toggleTodo = todoId => {
          
dispatch({type: "TOGGLE_TODO", payload:todoId} )
               
}

const eraserHandler = event => {
    event.preventDefault();
    console.log("hola jose")
    dispatch({type: "DELETE_TODO"})
   }

console.log(state)

 return (
     <div className= "main-Div"> 
      <TodoForm addTodoList={addTodoList} eraserHandler={eraserHandler} />   
     {state.map(item => {
         return <Todo todo={item} key={item.id} toggleTodo={toggleTodo} />
     })}
     </div>
     )    
}

export default TodoList;