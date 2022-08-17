const buff = Buffer.from("Thoyib Hidayat","utf8")

console.log(buff.toString())
console.log(buff.toString("hex"))
console.log(buff.toString("base64"))

const buffBase64 = Buffer.from("VGhveWliIEhpZGF5YXQ=","base64")
console.log(buffBase64.toString("utf8"))