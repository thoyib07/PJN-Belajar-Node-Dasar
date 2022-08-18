import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compres.txt");
const result = zlib.unzipSync(source)

console.log(result.toString());