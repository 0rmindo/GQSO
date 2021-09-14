const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {

  return response.status(400).send('status code 400 (Bad Request)');

});

router.get('/:param', (request, response) => {

  return response.status(400).send('status code 400 (Bad Request)');

});

router.get('/:num1/:num2', (request, response) => {

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

module.exports = router;
