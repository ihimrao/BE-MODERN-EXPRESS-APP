const root = (req, res) => {
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
