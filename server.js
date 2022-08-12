const net = require("net");

const server = net.createServer();


server.on("connection", (client) => {
  console.log("New client connected");
  client.write("Hello from Server!")
  client.setEncoding("utf-8")

  

  client.on("data", (data) => {
    console.log(data);
  })
})


server.listen(3000, () => {
  console.log("Server on port 3000")
})