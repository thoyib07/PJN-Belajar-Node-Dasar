import process from 'process'
import readline from 'readline'

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("Siapa Nama Anda? ",(name)=>{
    console.log(`Hallo ${name}`)
    input.question("Berapa Umurnya? ",(age)=>{
        console.log(`Oh anda lahir di tahun ${2022-age}`)
        input.close();
    })
})