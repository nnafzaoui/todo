const express = require('express');
const api = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo' //dont have this yet
 });

 try {
  connection.connect();
 } catch (e) {
  console.log('Oops. Connection to MySQL failed.');
  console.log(e);
 }

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
  connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
   if (error) return res.json({ error: error });
  connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
    if (error) return res.json({ error: error });
  console.log(results);
   });
  });
});

api.listen(3000, () => {
  console.log('API up and running!');
});
