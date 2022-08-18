import net from "net";

const server = net.createServer((client) => {
    console.log("Client connected");

    client.addListener("data",(data) => {
        console.log(`recive data ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    })
});

server.listen(3000,"localhost")