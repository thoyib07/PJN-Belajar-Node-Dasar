const os = require("os");

console.info(os.platform());
console.table(os.cpus())

// Berhasil karena masih menggunakan require function untuk file JS