import prosess from 'process';

prosess.addListener("exit",(exitCode)=>{
    console.log(`NodeJS exit with code ${exitCode}`)
})

console.log(prosess.version)
console.table(prosess.argv);
console.table(prosess.report);
// console.table(prosess.env);

prosess.exit(1)

console.log("Hello")