const app = require('./server');
const config = require('./src/config');

const port = config.api.port;
app.listen(port, 'localhost', () => {
  console.log(`Listening on port: ${port}`);
});