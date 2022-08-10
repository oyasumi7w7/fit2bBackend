const users = require('../Models/userModel');

const signup = async (req, res, next) => {
    try {
        const newUser = new users({
            user_name: 'adminzz',
            password: 123456789,
            firstName: 'Amannn',
            lastName: 'stickman',
            email: 'email@email.com',
            imgProfile: 'ab67706c0000bebbb1940ea8c5d86f564b684597',
            height: 180,
            weight: 70,
            birthday: '1996-01-01'
        })
        await newUser.save();
        res.send(newUser);
    } catch (error) {
        res.status('400').send(error);
    }
}


module.exports = {
    signup,

};