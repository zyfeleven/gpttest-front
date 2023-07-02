import React, { useState } from 'react';
import axios from 'axios';

const ChatBox = ({ onNewMessage }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: message,
        max_tokens: 50,
      }, {
        headers: {
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        },
      });

      onNewMessage({ user: 'user', text: message });
      onNewMessage({ user: 'gpt', text: response.data.choices[0].text });

      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
