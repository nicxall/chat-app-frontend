import { io } from 'socket.io-client'


//export const socket = io('http://localhost:81') 

const SOCKET_URL = process.env.NODE_ENV === 'production' ? process.env.SOCKET_URL : 'localhost:3000';

export const socket = io(SOCKET_URL, {
	transports: ['websocket'], // Asegúrate de usar el transporte adecuado
});
