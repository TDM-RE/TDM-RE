var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.listen(1212, () => {
    console.log('Server running at 1212');
});