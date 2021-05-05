const bcrypt = require('bcrypt');
const fs = require('fs');
const validCredential = require('../utils/validCredential.js');

exports.registration = (req, res) => {
  const initialValue = req.body;
  initialValue.id = Date.now();

  const { isValid, error } = validCredential(initialValue);

  if (!isValid) {
    return res.status(200).json(error);
  }

  let userFound = false;

  fs.readFile('./data/data.json', 'utf-8', (err, dataString) => {
    if (err) {
      return res
        .status(400)
        .json({ message: `Error happened on server: ${err}` });
    }

    const data = JSON.parse(dataString);

    data.forEach(user => {
      if (user.email === initialValue.email) {
        userFound = true;
        return res
          .status(400)
          .json(`Email: ${initialValue.email} already exist`);
      }

      if (user.login === initialValue.login) {
        userFound = true;
        return res
          .status(400)
          .json(`Login: ${initialValue.login} already exist`);
      }
    });

    if (!userFound) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          return res
            .status(400)
            .json({ message: `Error happened on server: ${err}` });
        }

        bcrypt.hash(initialValue.password, salt, function (err, hash) {
          if (err) {
            return res
              .status(400)
              .json({ message: `Error happened on server: ${err}` });
          }

          initialValue.password = hash;
          data.push(initialValue);

          fs.writeFile('./data/data.json', JSON.stringify(data), err => {
            if (err) {
              return res
                .status(400)
                .json({ message: `Error happened on server: ${err}` });
            }
            return res.status(200).json(initialValue);
          });
        });
      });
    }
  });
};
