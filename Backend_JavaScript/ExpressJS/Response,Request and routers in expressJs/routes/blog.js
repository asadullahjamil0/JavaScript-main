const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About Blog')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetch the latest blog about ${req.params.slug}`)
})

module.exports = router