import { URL } from "url";

const link = new URL("https://www.goldenmom.id/produk?kategori=telur")

link.host = "www.thoyibtest.id";
link.searchParams.append("status","mantap")

console.log(link.toString());
console.log(link.href);
console.log(link.protocol);
console.log(link.host);
console.log(link.pathname);
console.log(link.searchParams);