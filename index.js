const app = require('./server');
const config = require('./src/config');
const { swaggerDocs } = require('./src/docs/swagger');

const port = config.api.port;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  swaggerDocs(app, port);
});