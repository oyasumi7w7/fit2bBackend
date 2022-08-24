const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const users = require('../src/Models/userModel');
const config = require('../config')

dotenv.config()
// const activityRoutes = require('./src/Routes/activitiesRoute')
// const port = 8080
const app = express()

app.use(express.json())

// require("dotenv").config();
app.use(cors());

app.use(async (req, res, next) => {
    try {
        await mongoose.connect(config.mongoUri);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

if (config.isVercel) {
    app.use(async (req, res, next) => {
        await mongoose.connect(config.mongoUri);
        return next();
    });
}


// console.log(session)
app.post('/login', async (req, res) => {
    const setToken = await users.findOne(
        { user_name: req.body.user_name }, { user_name: 1, }
    );
    res.send({
        token: setToken._id,
        User: setToken.user_name
    });
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

const activityRoutes = require("../src/Routes/activitiesRoute");
app.use("/activities", activityRoutes);

const userRoutes = require("../src/Routes/userRoute");
app.use("/users", userRoutes);

// const PORT = 8080;
// app.listen(PORT, () => {
//     console.log("Express server listening on port " + PORT);
//   });


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
module.exports = app