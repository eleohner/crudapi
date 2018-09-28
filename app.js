// app.js

const express = require('express'),
    bodyParser = require('body-parser');

// initialize express app
const app = express();

let port = 1234;

app.get('/', (req,res) => {
    res.send("CHEESE");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});