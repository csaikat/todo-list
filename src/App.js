
import React from 'react';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import Content from  './MyComponents/Content'
import  { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    settodo(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)

  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    settodo([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos ,settodo] = useState([
    {
      sno:1,
      title:"Go to the market",
      desc:" take the thing to buy"
    },
    {

      sno:2,
      title:"Go to the school",
      desc:" take the note books"
    },
    {
      sno:3,
      title:"Go to the college",
      desc:" take the the assignemnts"

    }
  ]);
  
  return (
    <div className='App'>
    <>
    <Header title="To DoList"/>
    <AddTodo addTodo={addTodo}/>
    <Content todo ={todos} onDelete={onDelete} />
    <Footer/></>
    
    </div>
    
    
  );
}

export default App;
