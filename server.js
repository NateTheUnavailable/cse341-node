const express = require('express');
const app = express();

app.use('/', require('./routes'));

const a = process.env.port || 3000;

app.listen(a, () => console.log('Web Server is listening at port ' + (a)));