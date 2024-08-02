import { io } from 'socket.io-client'


//export const socket = io('http://localhost:81') 
const SOCKET_URL = import.meta.env.PROD
	? import.meta.env.VITE_SOCKET_URL
	: 'http://localhost:3000';

export const socket = io(SOCKET_URL, {
	transports: ['websocket'], // Asegúrate de usar el transporte adecuado
});

console.log(`En producción se ejecuta en la URL: ${import.meta.env.VITE_SOCKET_URL}`);
