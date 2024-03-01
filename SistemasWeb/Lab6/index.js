const express = require('express')
const app = express()
const port = 3600

var mensajes = 
[
    {
        "id": 1,
        "username": 'Japo',
        "content": 'Bien, gracias'
    },
    {
        "id": 0,
        "username": 'Joaquin',
        "content": 'Hola, como estas?'
    }
]

var id = 2

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/messages', (req, res) => {
    res.send(
        mensajes
    )
})

app.post('/messages', (req, res) => {

    mensajes.unshift(
        {
            "id":id,
            "username": req.body.username,
            "content":req.body.message
        }
        
    )
    id++
    res.send(
        mensajes
    )
})

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`)
})