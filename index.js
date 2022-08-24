const app = require('./api/index')
// const activityRoutes = require('./src/Routes/activitiesRoute')
// const port = 8080
// require("dotenv").config();



const PORT = 8080;
app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
  });
  
