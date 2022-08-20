const users = require('../Models/userModel');

const signup = async (req, res, next) => {
    try {
        
        // console.log(req.params)
        
        // console.log(req.query)
        // console.log(req.query.data)
        const newUser = new users(req.body)
            // ({
        //     user_name: req.user_name,
        //     password: req.password,
        //     firstName: req.firstName,
        //     lastName: req.lastName,
        //     email: req.email,
        //     // imgProfile: 'ab67706c0000bebbb1940ea8c5d86f564b684597',
        //     height: req.height,
        //     weight: req.weight,
        //     birthday: req.birthday
        // })
        
        await newUser.save();
        res.send(newUser);
    } catch (error) {
        res.status('400').send(error);
    }
}
const getDetail = async (req, res, next) => {
    const { u_id } = req.query;
    const profile = await users.findById(
        u_id 
      );
      res.send(profile)
    
}


module.exports = {
    signup,
    getDetail
};