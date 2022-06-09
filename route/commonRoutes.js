module.exports = function (app) {
  app.get('/r1', function (req, res) {
    console.log('got the get!');
    res.end();
  });
};
