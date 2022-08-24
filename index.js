const app = require('./api/index')
// const activityRoutes = require('./src/Routes/activitiesRoute')
// const port = 8080
// require("dotenv").config();



const PORT = 8080;
app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
  });
  
  
// /users
// const userRoutes = require("./routes/userRoute");
// app.use("/users", userRoutes);

// const PORT = process.env.PORT || 3000;
  // const start = async = () => {
//     await mongoose.connect('mongodb+srv://fit2b_admin:admin@fit2b.e1zgczo.mongodb.net/?retryWrites=true&w=majority');

//     app.listen(port, () => {
//         console.log(`Example app listening on port ${port}`)
//     })
// }

// start();