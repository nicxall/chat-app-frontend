

const Message = ({ message, isCurrentUser }) => {
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`rounded-lg p-2 ${
          isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
        } max-w-xs break-words`}
      >
        <strong>{message.senderId}:</strong> {message.content}
      </div>
    </div>
  );
};

export default Message;
