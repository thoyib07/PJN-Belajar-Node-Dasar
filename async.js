function samplePromise() { 
    return Promise.resolve("Thoyib");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();

// Standar JS
// Harus menggunakan async function sebelum memanggil await