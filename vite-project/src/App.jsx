import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([{ task: "sleep", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  const addTask = () => {
    //setTodo([...todo,{task:newTodo,id:uuidv4()}]);
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  const deleteTodo = (id) => {
    //let copy=todo.filter((todo)=>todo.id!=id);
    //setTodo(copy);
    setTodo((prevTodo) => todo.filter((prevTodo) => prevTodo.id != id));
  };
  const upperCase = () => {
    let arr = todo.map((Currtodo) => {
      return {
        ...Currtodo, //This part of the code creates a shallow copy of the Currtodo object ,So, the purpose of ...Currtodo in this context is to ensure that all properties of the original Currtodo object are retained in the new object
        task: Currtodo.task.toUpperCase(),
      };
    });
    // console.log(arr);
    setTodo(arr);
  };
  const todoUpper = (id) => {
    let arr = todo.map((Currtodo) => {
      if (Currtodo.id === id) {
        return {
          ...Currtodo,
          task: Currtodo.task.toUpperCase(),
        };
      } else {
        return { ...Currtodo }; // Return the unchanged element if ID doesn't match
      }
    });
    setTodo(arr);
  };
  const markAsDone = (id) => {
    let newArr = todo.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          done: true 
        };
      } else {
        return { ...obj };
      }
    });
    setTodo(newArr);
  };
  const markAll=()=>{
  
    let newArr=todo.map((obj)=>{
      return {
        ...obj,
        done:true,
      }
    })
    setTodo(newArr);
  }
  return (
    <>
      <input type="text" value={newTodo} onChange={updateTodoValue} />
      &nbsp;
      <button onClick={addTask}>ADD</button>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id} className={todo.done?'strikethrough':''}>
            {todo.task}{" "}
            <button onClick={() => todoUpper(todo.id)}>Uppercase</button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => markAsDone(todo.id)}>markAsDone</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCase}>UpperCase All</button>
      <button onClick={markAll}>MarkAsDoneAll</button>
    </>
  );
}

export default App;
