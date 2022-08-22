const express = require('express')
const ActivityModel = require('../Models/activityModel')
const activitiesController = require('../Controller/activityController')
const activityRouter = express.Router();

activityRouter.param("AcId", async (req, res, next, _id) => {
    const activity = await ActivityModel.findOne({
        _id : _id,
    });
  
    if (!activity) {
      return res.status(404).send();
    }
  
    req.activity = activity;
  
    next();
  });

activityRouter.get("/", activitiesController.getAllActivities);
activityRouter.get("/:AcId", activitiesController.getActivityById);
activityRouter.post("/create", activitiesController.createActivity);
activityRouter.put("/:AcId", activitiesController.editActivityById);
activityRouter.delete("/:AcId", activitiesController.removeActivityById);

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
