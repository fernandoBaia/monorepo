const express = require('express')
const responseTime = require('response-time')
const appInsights = require('applicationinsights');
const app = express()
const port = 3333

app.use(responseTime())

appInsights.setup("6a2919f2-be99-43a9-bbe9-088bd46b22ba")
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true, true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(false)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
    .start();

app.get('/', async (req, res) => {
    console.log('service 1')
    res.send('service 1 - with error')
})
//InstrumentationKey=6a2919f2-be99-43a9-bbe9-088bd46b22ba;
//IngestionEndpoint=https://brazilsouth-0.in.applicationinsights.azure.com/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//npm i applicationinsights