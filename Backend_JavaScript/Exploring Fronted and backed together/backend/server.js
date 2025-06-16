import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/blog', (req, res) => {
    res.send("This is blog page!");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "First joke",
            joke: "This is first joke"
        },
        {
            id: 2,
            title: "Second joke",
            joke: "This is Second joke"
        },
        {
            id: 3,
            title: "Third joke",
            joke: "This is Third joke"
        },
        {
            id: 4,
            title: "Fourth joke",
            joke: "This is fourth joke"
        },
        {
            id: 5,
            title: "Fifth joke",
            joke: "This is Fifth joke"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Port is listening at:${port}`);
})