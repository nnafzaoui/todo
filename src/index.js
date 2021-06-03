const express = require('express');
const api = express();
const bodyParser = require('body-parser');


// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello, world!');
// });

api.use(bodyParser.json());


api.use((req, res, next) => {
    console.log('Hello');
    next();
});

api.use(express.static(__dirname + '/public'));

api.post('/add', (req, res) => {
  
  console.log(req.body);
  res.send('It works!');

 });

api.listen(3000, () => {
  console.log('API up and running!');
});
