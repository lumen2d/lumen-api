
const express = require('express')
const app = express()
const port = 3000
const classes = require('./datas/classes.json')
const equipements = require('./datas/equipements.json')
const antagonistes = require('./datas/antagonistes.json')
const tresors = require('./datas/tersors.json')

app.get('/classes', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(classes));
})

app.get('/equipements', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(equipements));
})

app.get('/antagonistes', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(antagonistes));
})

app.get('/tresors', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tresors));
})

app.get('/', (req, res) => {
    res.send('Lumen OK.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
