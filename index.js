const app = require('./api/index')
// const activityRoutes = require('./src/Routes/activitiesRoute')
// const port = 8080
// require("dotenv").config();


const config = require('./config');
app.use(async (req, res, next) => {
  try {
      await mongoose.connect(config.mongoUri);
      next();
  } catch (error) {
      console.log(error);
      res.status(500).send();
  }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
  });
  
