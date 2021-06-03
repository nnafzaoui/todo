const express = require('express');
const api = express();


// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello, world!');
// });
api.use((req, res, next) => {
    console.log('Hello');
    next();
});

api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
  console.log('API up and running!');
});
