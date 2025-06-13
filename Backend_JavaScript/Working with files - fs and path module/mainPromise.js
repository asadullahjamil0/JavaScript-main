import fs from 'fs'

let a = await fs.readFile("asd2.txt", (e, d) => {
    console.log(d.toString());

})

let b = await fs.appendFile("asd2.txt", "\n\n\n\n\nTHis is promise", ()=>{
    console.log("Done!");
})
console.log(a, b);

