import { io } from 'socket.io-client'


//export const socket = io('http://localhost:81') 

const SOCKET_URL =' https://chat-app-backend-abmj.onrender.com'

export const socket = io(SOCKET_URL, {
	transports: ['websocket'], // Asegúrate de usar el transporte adecuado
});
