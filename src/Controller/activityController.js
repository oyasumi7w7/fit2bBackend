const activities = require("../Models/activityModel");
// const findByType = require('../Models/activityModel')

const getAllActivities = async (req, res, next) => {
  const { user_id } = req.query;
  const allActivity = await activities.find({ user_id: user_id })
    .sort({ date: -1 }).limit(req.query.limit);

  // ({
  //   user_id: user_id
  // });
  res.send(allActivity)
}

const getListActivities = async (req, res, next) => {
  const { user_id } = req.query;
  const allActivity = await activities.find({ user_id: user_id })
    .sort({ date: -1 });

  // ({
  //   user_id: user_id
  // });
  res.send(allActivity)
}

const getAllActivitiesByAll = async (req, res, next) => {
  const { start, end, type } = req.query

  const allActivity = await activities.find({
    type: type,
    date: {
      $gt: start,
      $lt: end
    }
  }).limit(10)
  // .sort({date: -1}).limit(req.query.limit);
  res.send(allActivity)
}

const getAllActivitiesByDate = async (req, res, next) => {
  const { start, end } = req.query
  // const startDate = new Date(date)
  // const endDate = new Date(date)

  // startDate.setHours(0, 0, 0, 0)
  // endDate.setHours(23, 59, 59, 999)
  // console.log(startDate.toISOString())
  // console.log(endDate.toISOString())
  const allActivity = await activities.find({
    date: {
      $gt: start,
      $lt: end
    }
  })
  // .sort({date: -1}).limit(req.query.limit);

  res.send(allActivity)
}

const getAllActivitiesByDateType = async (req, res, next) => {
  const { start, end, type } = req.query


  const allActivity = await activities.find({
    type: type,
    date: {
      $gt: start,
      $lt: end
    }
  }).sort({ date: -1 });

  res.send(allActivity)
}

const getAllActivitiesByType = async (req, res, next) => {
  const { type } = req.query
  const allActivity = await activities.find({ type: type })
  // .sort({date: -1}).limit(req.query.limit);
  res.send(allActivity)
}

const getAllActivitiesByDateEndDate = async (req, res, next) => {
  const { start, end } = req.query

  const allActivity = await activities.find({
    date: {
      $gt: start,
      $lt: end
    }
  }).sort({ date: -1 });
  res.send(allActivity)
}

const getActivityById = async (req, res, next) => {
  const oneActivity = await activities.findById(
    req.params.activity_id);
  res.send(oneActivity);
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
    req.body.date = new Date(req.body.date)
    const newActivity = new activities(req.body,);
    await newActivity.save();
    res.send(newActivity);
    // console.log(req.body.date)


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
  } catch (error) {
    res.status(400).send(error);
  }
};

const editActivityById = async (req, res, next) => {
  // console.log(req.body);
  // req.body.title = "Flying";
  // const { title, type } = req.body;
  req.activity.title = req.body.title;
  req.activity.type = req.body.type;
  req.activity.description = req.body.description;
  req.activity.time = req.body.time;
  req.activity.date = req.body.date;
  req.activity.img = req.body.img;
  // if (title) req.activity.title = title;
  // if (type) req.activity.type = type;

  // console.log(req.body)
  await req.activity.save();
  // console.log(req.body);
  res.send(req.activity);
  // console.log(req.body)
};

const removeActivityById = async (req, res, next) => {
  await req.activity.remove();
  // console.log(req.activity)
  // res.status(204).send();
};

module.exports = {
  getAllActivities,
  getListActivities,
  // getType,
  getActivityById,
  createActivity,
  removeActivityById,
  editActivityById,
  getAllActivitiesByAll,
  getAllActivitiesByDate,
  getAllActivitiesByDateType,
  getAllActivitiesByType,
  getAllActivitiesByDateEndDate
};