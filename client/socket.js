import io from 'socket.io-client';
import store, { gotNewMessage } from './store'

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log(socket.id, ":", 'I am now connected to the server!');
});

socket.on('new-message', (message) => {
  console.log("broadcasted message", message)
  store.dispatch(gotNewMessage(message))
})

export default socket;
