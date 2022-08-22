const activities = require("../Models/activityModel");
// const findByType = require('../Models/activityModel')

const getAllActivities = async (req, res, next) => {
  const { user_id } = req.query;
  const allActivity = await activities.find({
    user_id: user_id
  });
  res.send(allActivity)
}
const getActivityById = async (req, res, next) => {
  res.send(req.activity);
}
// const getType = async (req, res, next) => {
//   console.log(req.params)
//   const singleType = await activities.findByType(req.params.type);
//   // const singleType = await activities.find(
//   //    req.params 
//   // )
//   res.send(singleType)
// }

const createActivity = async (req, res, next) => {
  try {
    const newActivity = new activities(req.body);
    //   {
    //   // activity_id: uuidv4(),
    //   user_id: '62f32c1d78af39f80fa8aadd',
    //   img: 001,
    //   title: 'Teest',
    //   type: 'Walking',
    //   date: '2022-10-08',
    //   time: '17:30',
    //   description: 'testqqqqq'
    // }
   
    await newActivity.save();
    res.send(newActivity);
  } catch (error) {
    res.status(400).send(error);
  }
};

const editActivityById = async (req, res, next) => {
  console.log(req.body);
  req.body.title = "Flying";
  const { title, type } = req.body;

  if (title) req.activity.title = title;
  if (type) req.activity.type = type;

  console.log("CHANGE")
  await req.activity.save();
  console.log(req.body);
  res.send(req.activity);
};

const removeActivityById = async (req, res, next) => {
  await req.activity.remove();

  res.status(204).send();
};

module.exports = {
  getAllActivities,
  // getType,
  getActivityById,
  createActivity,
  removeActivityById,
  editActivityById
};