const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
})
app.get('/why', (req, res) => {
    res.send('bruh');
})

const bruh = 3000;

app.listen(process.env.port || bruh)
console.log('Web Server is listening at port ' + (process.env.port || bruh));