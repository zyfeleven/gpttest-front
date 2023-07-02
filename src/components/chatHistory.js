import React from 'react';

const ChatHistory = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.user}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
