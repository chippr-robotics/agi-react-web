// src/WebSocketContext.js

import { createContext, useEffect, useState } from 'react';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://your-websocket-server-url');

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    setSocket(ws);
    return () => {
      ws.close();
    };
  }, []);

  return <WebSocketContext.Provider value={socket}>{children}</WebSocketContext.Provider>;
};

export default WebSocketContext;
