// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const textInput = req.body.textInput;
    const csvData = `${textInput}\n`;

    fs.appendFile('data.csv', csvData, (err) => {
        if (err) throw err;
        console.log('Data written to data.csv');
    });

    res.send('Données enregistrées avec succès !');
});

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
    