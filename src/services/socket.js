import { io } from 'socket.io-client'


//export const socket = io('http://localhost:81') 

const SOCKET_URL = process.env.URL_BACKEND || 'http://localhost';
const socket_backend = 'https://chat-app-backend-abmj.onrender.com'

export const socket = io(socket_backend, {
	transports: ['websocket'], // Asegúrate de usar el transporte adecuado
});
