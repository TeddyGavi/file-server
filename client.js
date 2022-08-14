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

// rl.setPrompt("\nPlease enter a file path\n");

client.setEncoding('utf8');


//display all data coming from the server in utf8
client.on("data", (data) => {
  console.log(`${data}`);
});


console.log("Hello, You have logged into an app that will allow you to access data from a given file on the server.\n");

// display all the available files here
//prompt user to enter a file path
//open a readline stream as soon the client enters the first file
  
rl.on("line", (input) => {
  client.write(input);
});

rl.on('close', () => {
  console.log("\nYou have logged out\n");
  process.exit();
});

client.on("close", () => {
  console.log(`The server has shut down`);
  process.exit();
});



