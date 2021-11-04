const express = require('express');
const responseTime = require('response-time');
const appInsights = require('applicationinsights');
const logger = require('../logger');
const app = express();
const port = 3333;

app.use(responseTime());

appInsights
  .setup('6a2919f2-be99-43a9-bbe9-088bd46b22ba')
  .setAutoDependencyCorrelation(true)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true, true)
  .setAutoCollectExceptions(true)
  .setAutoCollectDependencies(true)
  .setAutoCollectConsole(true, true)
  .setUseDiskRetryCaching(true)
  .setSendLiveMetrics(true)
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
  .start();

app.get('/', async (req, res) => {
  logger.info('info log');
  logger.warn('warn log');
  logger.error('error log');
  res.send('service 1 -- task:2');
});

app.listen(port, () => {
  logger.info('start testem1 on 3333');
});
