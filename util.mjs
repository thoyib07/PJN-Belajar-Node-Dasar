import util from "util";
const nama = "Thoyib"
const fullnama = "Thoyib Hidayat"
console.log(`Hello ${nama} (${fullnama})`);
console.log(util.format("Hello %s (%s)",nama,fullnama));

const person = {
    name:"Thoyib Hidayat",
    sex:"Male",
}

 console.log(`JSON Stringify Person data : ${JSON.stringify(person)}`);
 console.log(util.format("Format Person data : %j",person));