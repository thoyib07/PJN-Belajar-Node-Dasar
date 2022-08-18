import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
    console.log(`primary : ${process.pid}`);
    // console.log(`os cpus : ${os.cpus()}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", (worker) => {
        console.log(`Worker-${worker.id} is exit`);
        cluster.fork();
    })
}

if (cluster.isWorker) {
    console.log(`worker : ${process.pid}`);
    const server = http.createServer((req,res) => {
        res.write(`Respons from process ${process.pid}`);
        res.end()
        process.exit()
    })
    server.listen(3000);
}