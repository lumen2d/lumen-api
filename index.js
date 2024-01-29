
const express = require('express')
const app = express()
const port = 3000
const classes = require('./datas/classes.json')

app.get('/classes', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(classes));
})

app.get('/equipements', (req, res) => {
    res.send('Lumen equipements OK.')
})

app.get('/antagonistes', (req, res) => {
    res.send('Lumen antagonistes OK.')
})

app.get('/tresors', (req, res) => {
    res.send('Lumen tresors OK.')
})

app.get('/', (req, res) => {
    res.send('Lumen OK.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
