import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'; // För en vanlig ikon
import { faTrash } from '@fortawesome/free-solid-svg-icons';


import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> <u>Fannys, To do List </u></h1>
      </header>
      <form className="ToDoform">
        <input type="text"  className="todo-input" placeholder="Vad vill du lägga till idag?"/>
        <button type="submit" className="SubmitButton">Lägg till </button>
      </form>

      <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#000000" }} />
      <FontAwesomeIcon icon={faTrash} style={{ color: "#000000" }} />
      

    </div>

    
  );
}

export default App;
