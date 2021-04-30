const rules = [
  {
    key: 'email',
    type: 'string',
    minLength: 5,
    pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  },
  {
    key: 'login',
    type: 'string',
    minLength: 5,
  },
  {
    key: 'password',
    type: 'string',
    minLength: 5,
    pattern: '/[a-z]+[A-Z]+[0-9]',
  },
];

const validCredential = credential => {
  console.log(credential.email.match(rules[0].pattern));
};

module.exports = validCredential;
