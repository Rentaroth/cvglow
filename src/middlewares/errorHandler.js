const errorManagement = (err, req, res, next) => {
  console.error(err.stack);
  console.error(err.message);
  return res.send(err.user).status(err.status || 500);
}

module.exports = {
  errorManagement,
}