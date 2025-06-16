require("dotenv").config();
const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Us!')
})

app.get('/contact', (req, res) => {
    res.send('Contact Us!')
})

app.get('/blog', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send('Hello Blog!')
})

app.get('/Blog/:slug', (req, res) => {
    res.send(`Hello ${req.params.slug}`)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
