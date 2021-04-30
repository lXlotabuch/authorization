const bcrypt = require('bcrypt');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const secretKey = 'jkfljsdi43';

exports.login = (req, res) => {
  const { loginOrEmail, password } = req.body;

  fs.readFile('./data/data.json', (err, dataString) => {
    if (err) {
      return res
        .status(400)
        .json({ message: `Error happened on server: ${err}` });
    }

    const data = JSON.parse(dataString);

    const userCredential = data.find(user => {
      if (user.email === loginOrEmail || user.login === loginOrEmail) {
        return true;
      }
      return false;
    });

    if (!userCredential) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    bcrypt.compare(password, userCredential.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          login: userCredential.login,
        };

        const token = jwt.sign(payload, secretKey);

        return res
          .status(200)
          .cookie('token', token, {
            maxAge: 3600 * 48,
            httpOnly: true,
          })
          .json({
            success: true,
          });
      }
      return res.status(404).json({ error: 'Wrong password' });
    });
  });
};
