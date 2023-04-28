// src/components/TaskForm.js

import React, { useState } from 'react';
//import { CHIPPRAGI } from 'chippragi-package';

const TaskForm = () => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = () => {
    // Interact with the CHIPPRAGI system, for example:
    //CHIPPRAGI.addComponent('entityID', 'TaskDescription', { task: taskDescription });

    // Clear the input field
    setTaskDescription('');
  };

  return (
    <div>
      <label htmlFor="taskDescription">Objective Description:</label>
      <input
        type="text"
        id="taskDescription"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TaskForm;
