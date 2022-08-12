const net = require('net');
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface = {
  input: process.stdin,
  output:process.stdout,
} 


const conn = net.createConnection({
  host: 'localhost',
  port: 3000,
});

conn.setEncoding('utf8');

conn.on("data", (data) => {
  console.log("Server says:", data);
})

conn.on("connect", () => {
  conn.write("Hello from client!");
})


