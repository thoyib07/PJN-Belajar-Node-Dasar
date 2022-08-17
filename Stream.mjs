import fs from 'fs'

const writer = fs.createWriteStream("target.log");
writer.write("Thoyib Hidayat\n");
writer.write("Tangerang\n");
writer.write("BE\n");
writer.end()

const reader = fs.createReadStream("target.log");
reader.addListener("data",(data)=>{
    console.log(data.toString())
})

