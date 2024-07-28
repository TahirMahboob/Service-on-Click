const express = require('express');
const app = express();
const cors=require('cors')
app.use(cors())
//database
const Connection = require('./database');
require('dotenv').config();
const port = process.env.PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.PASSWORD;
Connection(USERNAME, PASSWORD);
//admin
const createAdmin=require("./scripts/admin.js")
createAdmin.createAdmin()
//Routes
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//register
const signupRoutes = require('./routes/signup.js');
app.use('/user', signupRoutes);
//login
const loginRoutes = require('./routes/login.js');
app.use('/user', loginRoutes);

app.get('/zeeshan', (req, res) => {
  res.send('Hello Zeeshan!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
