import { io } from 'socket.io-client';

const API_URL = import.meta.env.VITE_API_URL_V;

const socket = io(API_URL, {
  withCredentials: true,
});

export default socket;
