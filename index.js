const express = require('express');

const app = express();

const port = 3333;

const sumRoute = require('./routes/sum-route.js');

app.use('/soma', sumRoute);

app.listen(port, () => {

  console.log(`Backend is running at localhost: ${port}`);

});
