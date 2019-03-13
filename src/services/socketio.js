import io from 'socket.io-client'
import bus from '../bus'

const socket = io('http://localhost:6226')

socket.on('new-message', function(data) {
  bus.$emit('new-message', data)
})

export default socket 