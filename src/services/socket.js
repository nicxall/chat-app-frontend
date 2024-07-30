import { io } from 'socket.io-client'


//export const socket = io('http://localhost:81') 

const URL_BACKEND = 'https://chat-app-backend-abmj.onrender.com/'

export const socket = io(URL_BACKEND, {
	transports: ['websocket'], // Asegúrate de usar el transporte adecuado
});