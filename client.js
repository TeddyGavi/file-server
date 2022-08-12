const net = require('net');
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = net.createConnection({
  host: 'localhost',
  port: 3000,
});

client.setEncoding('utf8');

client.on("data", (data) => {
  // console.log("\nServer says:", data);
  console.log(data);
 
})

// client.write("Hello from client!");
rl.write("Hello, You have logged into an app that will allow you to access data from a given file on the server.\n")

//prompt user to enter a file path
//I want to display all the available files here

rl.setPrompt("\nPlease enter a file path\n")

//keep asking for a file to be read unless the user exits the server.

rl.prompt();

rl.on("line", (input) => {
  client.write(input);
  rl.prompt()
}).on('close', () => {
  console.log("\nYou have logged out\n")
  process.exit();
})



