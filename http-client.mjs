import https from "https";

const endpoint = "https://hookb.in/kxEZbZrK1ZiBDokBLjgK";
const request = https.request(endpoint,{
    method:"POST",
    headers:{
        "Content-Type"  : "application/json",
        "Accept"        : "application/json",
    }
},(res) => {
    res.addListener("data",(data) => {
        console.log(`Recive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    name:"Thoyib Hidayat",
    sex:"Male"
})

request.write(body);
request.end();