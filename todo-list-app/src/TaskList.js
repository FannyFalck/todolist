import React from 'react';

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Att göra</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.task_name}
            {/* Lägg till knappar för redigering och borttagning */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
