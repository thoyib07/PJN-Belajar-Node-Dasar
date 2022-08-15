import os from "os";

console.info(os.platform());
console.table(os.cpus());

// File .mjs harus menggunakan import menggantikan require function di file .js untuk memanggil modules