const express = require('express');
const app = express();
const port = 3333;

app.get('/soma', (request, response) => {
  return response.status(400).send('status code 400 (Bad Request)');
});

app.get('/soma/:param', (request, response) => {
  return response.status(400).send('status code 400 (Bad Request)');
});

app.get('/soma/:num1/:num2', (request, response) => {
  const num1 = Number(request.params.num1);
  const num2 = Number(request.params.num2);
  const result = num1 + num2;

  const isZero = result === 0;
  const isTruthyNumber = Boolean(result);

  if (isTruthyNumber || isZero) {
    return response.send(`${result}`);
  }
  
  return response.status(400).send('status code 400 (Bad Request)');
});

app.listen(port, () => {
  console.log(`Backend is running at localhost: ${port}`);
});