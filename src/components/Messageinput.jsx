
const remove = () => {
  localStorage.removeItem('token');
  window.location.href = '/'
}


const MessageInput = ({ message, setMessage, handleSendMessage, remove }) => (
  <div className="p-2 sm:p-4 bg-gray-800 flex items-center space-x-2">
    <button
      onClick={remove}
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1.5 sm:p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      Logout
    </button>

    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="flex-grow bg-gray-700 text-white border border-gray-600 rounded-full px-2 sm:px-4 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
      placeholder="Type your message..."
    />
    <button
      onClick={handleSendMessage}
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1.5 sm:p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
      <span className="sr-only">Icon description</span>
    </button>
  </div>
);

export default MessageInput;
