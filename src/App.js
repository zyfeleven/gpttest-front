import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/chatbox';
import ChatHistory from './components/chatHistory';

function App() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };
  return (
    <div className="App">
      <h1>GPT Chat App</h1>
      <ChatHistory messages={messages} />
      <ChatBox onNewMessage={handleNewMessage} />
    </div>
  );
}

export default App;

