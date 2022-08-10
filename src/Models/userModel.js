const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: { 
        type: String, 
        min: 6, 
        max: 30, 
        require: true 
    },
    password: { 
        type: String, 
        min: 8, 
        max: 30, 
        require: true 
    },
    firstName: { 
        type: String, 
        min: 6, 
        max: 64, 
        require: true 
    },
    lastName: { 
        type: String, 
        min: 6, 
        max: 64, 
        require: true 
    },
    email: { 
        type: String, 
        min: 6, 
        max: 30, 
        require: true 
    }, ///เผื่อทำเพิ่ม
    imgProfile: { 
        type: String, 
        min: 0, 
        max: 10000, 
        require: true 
    },
    // imgActivity: { type: String }, ///รูปของคุณเป๊ก,
    // age: { 
    //     type: Number, 
    //     min: 0, 
    //     max: 3, 
    //     require: true
    //  },
    height: { 
        type: Number, 
        min: 0, 
        max: 500, 
        require: true 
    },
    weight: { 
        type: Number, 
        min: 0, 
        max: 500, 
        require: true 
    },
    birthday: { 
        type: Date, 
        require: true 
    },
});

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel;