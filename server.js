const express = require('express');
const app = express();

app.use('/', require('./routes'));

const a = 3000;

app.listen(process.env.port || a)
console.log('Web Server is listening at port ' + (process.env.port || a));