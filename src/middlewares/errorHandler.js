const errorManagement = (err, req, res, next) => {
  console.error(err.stack);
  console.error(err.message);
  return res.status(500).send(err.user || { message: 'An error has ocurred!' });
}

module.exports = {
  errorManagement,
}