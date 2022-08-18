import http from "http";

const server = http.createServer((req,res) => {
    console.log(req.method);
    console.log(req.url);
    // console.table(req.headers);
    if (req.method === "POST") {
        req.addListener("data", (data) => {
            res.setHeader("Content-Type","application/json")
            res.write(data);
            res.end();
        })
    } else {
        if (req.url === "/thoyib") {
            res.write("Halo Thoyib")
        } else {
            res.write("Hello Http Server")
        }
        res.end();
    }
});

server.listen(3000)