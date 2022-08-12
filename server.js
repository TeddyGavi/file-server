const net = require("net");
const readline = require("readline");
const fs = require("fs");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const server = net.createServer();

server.listen(3000, () => {
  console.log("Server on port 3000")
})


server.on("connection", (client) => {
  console.log("New client connected");
  // client.write("\nHello from Server!")
  client.setEncoding("utf-8")  

//on receiving data from the client, display what that file path is to the client and the server and send that file path into readFile
  client.on("data", (data) => {
    console.log(`The file path entered is ${data}`);
    client.write(`The file path entered is ${data}`);

    //receives a file path from the client and send the data back to the client 
    fs.readFile(data, (err, body) => {
      if (err) {
        client.write(`There was an error: ${err}`)
        return;
      }
      client.write(`This file contains: " -->${ body }<--"`);
      return;
    })

 
  })

  client.on("error",(error) => {
    if (error.code === "ECONNRESET") console.log("A client has left")
    else console.log(error)
  })

  client.on("end", () => {
    console.log("A client has left")
  })


})





