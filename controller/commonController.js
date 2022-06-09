const root = (req, res) => {
  res.send('Hello From Common Controller!');
};

const globalState = () => {
  // your method logic
};

module.exports = {
  root,
  globalState,
  // anotherMethod
};
