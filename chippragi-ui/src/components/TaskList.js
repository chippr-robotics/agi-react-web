// src/components/TaskList.js

import React, { useContext, useEffect, useState } from 'react';
import WebSocketContext from '../WebSocketContext';

const TaskList = () => {
  const socket = useContext(WebSocketContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);

        if (message.type === 'UPDATE' && message.eventData.componentName === 'TaskDescription') {
          setTasks((prevTasks) => [...prevTasks, message.eventData.data.task]);
        }
      };
    }
  }, [socket]);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
