import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("app.log")
const log = new Console({
    stdout: file,
    stderr: file,
})

log.info("Hello info");
log.error("Hello error");

const person = {
    name: "Thoyib Hidayat",
    sex: "male"
}

log.table(person)