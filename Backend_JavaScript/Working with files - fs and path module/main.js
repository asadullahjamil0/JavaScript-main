// for type module 
import fs from 'fs'
// const fs = require("fs")
// console.log(fs);

console.log("Starting...");
// fs.writeFileSync("asd.txt", "He is a good boy");
fs.writeFile("asd2.txt", "He is a telented guy", () => {
    console.log("Done!");
    fs.readFile("asd2.txt", (error, data) => {
        if (error) {
            console.log("Error in reading file: ", error);
            return;
        }
        console.log("Reading File: ", data.toString());
    })
})

fs.appendFile("asd2.txt", " Yeah he is ", (e, d) => {
    console.log(d);
})

console.log("Ending...");