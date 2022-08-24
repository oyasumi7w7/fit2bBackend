const express = require('express')
const ActivityModel = require('../Models/activityModel')
const activitiesController = require('../Controller/activityController')
const activityRouter = express.Router();

activityRouter.param("activity_id", async (req, res, next, _id) => {
    const activity = await ActivityModel.findOne({
        _id : _id,
    });
  
    if (!activity) {
      return res.status(404).send();
    }
  
    req.activity = activity;
  
    next();
  });
  // .post'http://localhost:8080/activities/create'
           // activities/
activityRouter.get("/", activitiesController.getAllActivities);
activityRouter.get("/list", activitiesController.getListActivities);
activityRouter.get("/search/all", activitiesController.getAllActivitiesByAll);
activityRouter.get("/search/date", activitiesController.getAllActivitiesByDate);
activityRouter.get("/search/dateEnd", activitiesController.getAllActivitiesByDateEndDate);
activityRouter.get("/search/dateType", activitiesController.getAllActivitiesByDateType);
activityRouter.get("/search/type", activitiesController.getAllActivitiesByType);
activityRouter.get("/:activity_id", activitiesController.getActivityById);
activityRouter.post("/create", activitiesController.createActivity);
activityRouter.put("/:activity_id", activitiesController.editActivityById);
activityRouter.delete("/:activity_id", activitiesController.removeActivityById);


module.exports = activityRouter;

// activityRouter.get('/',async (req, res) => {
//     const activities = await ActivityModel.find();
//     res.send(activities.map((act)=> act.toJSON()));
// });

// activityRouter.get('/:activityId', (req, res) => {
//     console.log(req.params);
//     res.send('get-one');
// });
// activityRouter.post('/',async (req, res) => {
//     // onsole.log(req.body);
//     const activity =  new ActivityModel(req.body)
//     const validateResult =  activity.validateSync();
//     if(validateResult !== null){
//         res.status(400).send('Bad request')
//     }
//     await activity.save();
//     res.send('create');
// });
// activityRouter.patch('/:activityId', (req, res) => {
//     res.send('update');
// });
// activityRouter.delete('/:activityId', (req, res) => {
//     res.send('delete');
// });
