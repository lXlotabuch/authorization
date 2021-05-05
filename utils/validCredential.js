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
    pattern: /^[a-z0-9]+$/i,
  },
];

const validCredential = credential => {
  const error = [];
  rules.forEach(rule => {
    if (credential[rule.key].length < rule.minLength) {
      error.push({
        key: rule.key,
        message: 'min length 5',
      });
      return;
    }
    if (rule.pattern && !credential[rule.key].match(rule.pattern)) {
      error.push({
        key: rule.key,
        message: `Invalide ${rule.key}`,
      });
      return;
    }
    if (typeof credential[rule.key] !== rule.type) {
      error.push({
        key: rule.key,
        message: 'Invalide type',
      });
      return;
    }
  });
  return { isValid: !error.length, error };
};

module.exports = validCredential;
