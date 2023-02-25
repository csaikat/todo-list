import React from 'react'
//import { FormCheck } from 'react-bootstrap'
import { ToDo } from './ToDo'

export default function Content(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
}
return (
  <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
     
      {props.todo.length===0? "No Todos to display":  
      props.todo.map((todo)=>{
          console.log(todo.sno);
          return (<ToDo todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
          )
      })
        } 
  </div>
)
}
