
import io from 'socket.io';
//连接服务器得到代表😂socket对象
const socket = io('ws://localhost:5000')
//绑定receiveMessage监听， 来接受服务器发送的请求
//客户端接收消息的消息名称，和服务器发送的消息名称必须一致
socket.on('receiveMsg', function (data) {
  console.log('浏览器端接收到服务器发送的消息:', data)
})
//向服务器发送请求客户端发送消息名称，必须和服务器发送的一
socket.emit('sendMsg', {name : 'Tom', data:Data.now()})
console.log('浏览器端向服务器发送消息: ', {name : Tom, data : Data.now()});