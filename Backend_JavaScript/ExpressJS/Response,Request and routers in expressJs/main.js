const express = require('express')
const blog = require('./routes/blog')
const app = express();
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("Its a post request!");
    res.send('Hello post request!')
})

// app.put('/', (req, res) => {
//     console.log("Its a PUT request!");
//     res.send('Hello PUT request!')
// })

// app.get('/myIndex', (req, res) => {
//     console.log("Its a get request by myIndex.html");
//     res.sendFile("templates/myIndex.html", { root: __dirname })
// })

// app.get('/api', (req, res) => {
//     res.json({
//         a: 3,
//         b: 4,
//         name: ["Asad", "Haider"]
//     })
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
