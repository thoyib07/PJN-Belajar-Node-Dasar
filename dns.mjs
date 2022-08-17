import dns from 'dns/promises';

const ip = await dns.lookup("www.goldenmom.id")

console.log(ip.address)
console.log(ip.family)
