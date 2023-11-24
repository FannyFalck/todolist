import { sendData,getData } from './utils/fetchHelper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'; // För en vanlig ikon
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { logMovies } from './test';

import './Style.css';

import React, { useState,useEffect } from 'react';

function App() {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([]); // State to store data
  const [state, setState] = useState({ "task": "" });

  

  useEffect(() => { //kör koden när vi refreshar. 
    getData(setTasks)
    
  }, []) 

  const handleSubmit = (event) => { //// const används här istället för att anvädna function, här här används "arrow function" (=>)

    event.preventDefault();
    sendData(taskInput);
    if (taskInput.trim() === '') {
      alert("Fältet får inte vara tomt!")
      return;
    }
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const testfunction = async () => {
    const task = await logMovies();
    setState(task)


  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> <u>Fannys, To do List </u></h1>
      </header>
      <form className="ToDoform" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="Vad vill du lägga till idag?" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        <button type="button" className="SubmitButton" onClick={handleSubmit}>Lägg till </button>
      </form>

      {/* För att kunna visa uppgifter  */}
      <ul className='taskformBackgrond'>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="trashcan" onClick={() => handleRemoveTask(index)}> <FontAwesomeIcon icon={faTrash} /></button>
          </li>

        ))}
      </ul>

    </div>

  );
}

export default App;



{/* <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#000000" }} /> */ }