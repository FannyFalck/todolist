import { sendData, getData } from './utils/fetchHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

import './Style.css'; 

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]); // State to store data
  const [listName, setListName] = useState('Namnge listan'); // State for the list name
  const [editingListName, setEditingListName] = useState(false); // State to track if the list name is being edited

  useEffect(() => {
    getData(setTasks);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(taskInput);
    if (taskInput.trim() === '') {
      alert("Fältet får inte vara tomt!");
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


  // Kod för List namn
  const handleListNameEdit = () => {
    setEditingListName(true);
  };

  const handleListNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleListNameSubmit = () => {
    setEditingListName(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> <u>Fannys, To do List </u></h1>
      </header>
      
      <form className="ToDoform" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="Vad vill du lägga till idag?" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        <button type="button" className="SubmitButton" onClick={handleSubmit}>Lägg till </button>
      </form>

    
      <ul className='taskformBackgrond'>
         <div className="List-header"> {/* Här är kod för rubriken för just listan rubrik  */}
          {editingListName ? ( <input type="text" value={listName} onChange={handleListNameChange} onBlur={handleListNameSubmit} autoFocus /> ) : (
          <>
            <p> <u>{listName} </u> <FontAwesomeIcon icon={faPencilAlt} onClick={handleListNameEdit} style={{ color: "#0f0f0f", marginLeft: "5px", cursor: 'pointer' }} /> </p> 
            
          </>
        )}
      </div>
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
