function samplePromise() { 
    return Promise.resolve("Thoyib");
}

const name = await samplePromise();
console.info(name);

// Di nodeJS function defaultnya async function, jadi bisa langsung memanggil await