const data = require('./data/data.json');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { registration } = require('./controllers/registration');
const { login } = require('./controllers/login.js');
const { logOut } = require('./controllers/logout.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/registration', registration);
app.post('/login', login);
app.post('/logout', logOut);

app.get('*', (req, res) => {
  console.log(data);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
