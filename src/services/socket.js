import { io } from 'socket.io-client'


//export const socket = io('http://localhost:81') 

export const socket = io(process.env.URL_BACKEND, {
	transports: ['websocket'], // Asegúrate de usar el transporte adecuado
});