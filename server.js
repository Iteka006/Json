const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());

const routes = require('./routes/staffroutes.js')(app, fs);
const routest = require('./routes/traineesroutes.js')(app, fs);
const routetr = require('./routes/trainerroutes.js')(app, fs);



const server = app.listen(3000, () => {
    console.log('listening on port %s...', server.address().port);
});