import { useState } from "react";
import MessageList from './MessageList'
import useChat from '../hooks/chat/useChat'
import AuthJwt from '../hooks/auth'
import MessageInput from './Messageinput'

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const userId = AuthJwt();
  const { messages, sendMessage, bottomRef } = useChat(userId);

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex-grow overflow-y-auto p-4">
        <MessageList messages={messages} currentUserId={userId} bottomRef={bottomRef}/>
      </div>
      <MessageInput
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatApp;