const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { registration } = require('./controllers/registration');
const { login } = require('./controllers/login.js');
const { logOut } = require('./controllers/logout.js');
const { static } = require('express');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/registration', registration);
app.post('/login', login);
app.post('/logout', logOut);

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
