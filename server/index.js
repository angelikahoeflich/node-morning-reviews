const express = require('express');
const users = require('../users.json');

const app = express();
const port = 4338;

app.use(express.json());

app.get('api/users', (req,res) => {
  res.status(200).send(users)
})

app.listen(port, () => {
  console.log(`server running on ${port}`)
});

