const express = require('express');
const users = require('../users.json');

const app = express();
const port = 4338;

app.use(express.json());

app.get('api/users', (req,res) => {
  res.status(200).send(users)
})

app.get('/api/users:id', (req, res) => { const {id} = req.params 
    if(!id)
      return res.status(404).send('unable to find resource')

      const foundUser = users.find(user => user.id === +id)

      if(!foundUser){
        return res.status(500).send('unable to find user')
      }
      res.status(200).send(foundUser)
})

//query
//axios.post('api/users?name=angelika')
app.post('/api/users', (req, res) => {
  const {name} = req.query;
})

//axios.post('/api/users/cole')
//params
app.post('/api/users', (req, res) => {
  const {name} = req.params;
})

//axios.post('api/users', {name:cole})
//body
app.post('/api/users', (req, res) => {
  const {name} = req.body
})


app.listen(port, () => {
  console.log(`server running on ${port}`)
});

