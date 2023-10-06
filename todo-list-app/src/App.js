import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'; // För en vanlig ikon
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Style.css';

import React, { useState } from 'react';

function App() {
  const [taskInput, setTaskInput] = useState('')

  function handleSubmit(event){
    event.preventDefault();
    console.log("hej");
    alert("Formuläret har skickats");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> <u>Fannys, To do List </u></h1>
      </header>
      <form className="ToDoform">
        <input type="text"  className="todo-input" placeholder="Vad vill du lägga till idag?" value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>
        <button type="button" className="SubmitButton" onClick={handleSubmit}>Lägg till </button>
      </form>
      
      {/* <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#000000" }} />
      <FontAwesomeIcon icon={faTrash} style={{ color: "#000000" }} /> */}
      

    </div>

    
  );
}

export default App;
