var logger = require('./src/lib/services/logger-service');
var app = require('./src')();
var properties = require('./src/lib/services/property-service').getProperties();
var port = process.env.PORT || properties.get('PORT');

app.set('port', port);

app.listen(port, function () {
  logger.info('Server listening on port %s', port);
});
