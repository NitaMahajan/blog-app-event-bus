const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    let event = req.body;
    console.log('Emitting events...');
    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);
    
    res.status(200).send({ message: 'OK' });
});

app.listen(4005, () => {
    console.log('App listening on port 4005...')
});


