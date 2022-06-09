const { verify } = require('../middleware/authMiddleware');

const root = (req, res, verify) => {
  res.send('Hello From Auth Controller!');
};

const assignToken = () => {
  // your method logic
};

module.exports = {
  root,
  assignToken,
  // anotherMethod
};
