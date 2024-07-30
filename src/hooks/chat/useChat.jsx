import { useState, useEffect, useRef } from 'react';
import { socket } from '../../services/socket';

const useChat = (userId) => {
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    socket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    socket.on('allMessages', (allMessages) => {
      setMessages(allMessages);
    });

    return () => {
      socket.off('message');
      socket.off('allMessages');
    };
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = (content) => {
    socket.emit('sendMessage', { userId, content });
  };

  return { messages, sendMessage, bottomRef };
};

export default useChat;