const express = require('express')
const app = express()
// middlewaret
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

app.use(cors())

app.use(bodyParser.json())

morgan.token('body', function (req, res) { 
    if (req.method === 'POST')
        return JSON.stringify(req.body) 
        return ''
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

/*
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      tokens.body(req, res)
    ].join(' ')
  }))
*/


let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Martti Tienari",
        "number": "040-123456",
        "id": 2
    },
    {
        "name": "Arto Järvinen",
        "number": "040-123456",
        "id": 3
    },
    {
        "name": "Lea Kutvonen",
        "number": "040-123456",
        "id": 4
    }
]   

app.get('/',(req, res) => { 
    res.send('<p>helloy</p>')
})

app.get('/info',(req, res) => {
    res.send(`<p>puhelinluettelossa ${persons.length} henkilön tiedot</p>${new Date()}`)
})

app.get('/api/persons',(req, res) => {
    res.json(persons)
})

app.get('/api/person/:id',(req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)

    person ? 
        res.json(person)
        :
        res.status(404).end()
})

app.delete('/api/person/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(p => p.id !== id);
    res.status(204).end();
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    if (!body.name || !body.number) {
        console.log(!body.name)
        console.log(!body.number)
        return res.status(400).json({ 
          error: 'name or age missing' 
        })
    }

    if(persons.some(p => p.name === body.name)){
        return res.status(404).json({
            error: 'name must be unique'
        })
    }
    
    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * Math.floor(9999999)),
    }

    persons = persons.concat(person)
    res.json(person)
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
