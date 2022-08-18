import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("timer.mjs");
const result = zlib.gzipSync(source)

// console.log(result.toString());
fs.writeFileSync("zlib-compres.txt",result)