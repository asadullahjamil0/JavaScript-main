// const { createServer } = require('node:http');
// // import { http } from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// EcmaSrcipt using module type
// import asd from './main.js'
// import {a, b, c, d} from "./main.js"

// console.log(asd);
// console.log(a, b, c, d);

let c = require('./myModule.js')

console.log(c, __dirname, __filename);
