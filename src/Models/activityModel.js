const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
      },
    img: {
        type: String,
        min: 0,
        max: 10000
    },
    title: {
        type: String,
        min: 5,
        max: 60,
        require: true
    },
    type: {
        type: String,
        enum: [
            'Running', 'Walking','Jump Rope' ,'Jogging' ,'Weight Training','Yoga'
        ],
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    time:{
        type: String,
        require: true
    },
    description: {
        type: String
    },
}, {
    statics: {
        findByType: async function (type) {
            return this.find({ type });
        },
    },
})

const ActivityModel = mongoose.model('activity', activitySchema);

module.exports = ActivityModel;