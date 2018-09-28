// app.js

const express = require('express'),
    bodyParser = require('body-parser');

// initialize express app
const app = express();

let port = 1234;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});