import{ useRef, useEffect } from 'react';
import InitialsAvatar from 'react-initials-avatar';

const MessageList = ({ messages, currentUserId, bottomRef }) => {
  const getInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase();
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender.id === currentUserId ? 'justify-end' : 'justify-start'} items-start`}
        >
          {msg.sender.id !== currentUserId && (
            <div className="w-10 h-10 mr-2 flex items-center justify-center rounded-full bg-gray-500 text-white">
              {getInitials(msg.sender.username)}
            </div>
          )}
          <div
            className={`rounded-lg px-4 py-2 max-w-xs ${msg.sender.id === currentUserId ? 'bg-blue-700 text-white' : 'bg-gray-700 text-white'}`}
          >
            <div className="font-bold">{msg.sender.username}</div>
            <div className="font-normal text-gray-700 dark:text-gray-300">{msg.content}</div>
          </div>
          {msg.sender.id === currentUserId && (
            <div className="w-10 h-10 ml-2 flex items-center justify-center rounded-full bg-blue-500 text-white">
              {getInitials(msg.sender.username)}
            </div>
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;