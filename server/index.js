const mysql = require('mysql2');
const express = require('express')

const app = express();
const port = 3001;
const cors = require("cors")
app.use(cors())


const connection = mysql.createConnection({
  host: 'localhost', // eller din databasvärd
  user: 'root',      // användarnamn för din MySQL-databas
  password: '',  // lösenord för din MySQL-databas
  database: 'todolistTable'  // namnet på din MySQL-databas
});

connection.connect()
const createTable = `
Create Table todolistTable(
  Text varchar(255) NOT NULL ,
  ID int NOT NULL AUTO_INCREMENT,
  Primary key (ID)
)
`
connection.query("drop table IF EXISTS todolistTable")
connection.query(createTable, (err, rows, fields) => {
  if (err) throw err
})

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST request to insert data into MySQL - är en endppoint 
app.post('/data', (req, res) => {
  const { todotext } = req.body; // hämtar ut datan som kommer från hemsidan
  console.log(req.body);
  const query = 'INSERT INTO todolistTable (Text) VALUES (?)'; // här definerar vi query
  connection.query(query, [todotext], (error, results) => { // här körs query, den tar testen och skvikar in den till databas 
    if (error) throw error;
    res.status(201).send('Data inserted successfully!');
  });
});


// GET request to fetch data from MySQL
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM todolistTable', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});


// Start server
app.listen(port, () => {
  console.log("Server running");
});

module.exports = connection;
