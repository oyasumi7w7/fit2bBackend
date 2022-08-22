const users = require('../Models/userModel');

const signup = async (req, res, next) => {
    try {
        // let error_signup = ''
        // const {user_name, password, checkPassword } = req.body
        // const checkName = await users.findOne({
        //     user_name
        //   },{user_name:1,_id:0});
        //   console.log(checkName)
        //   console.log(user_name)
        //  if (password !== checkPassword) {
        //     error_signup = 'Passwords do not match.'
        //     return  res.status('400')
        //     .send(error_signup)
        // } else if(user_name === checkName.user_name){
        //     error_signup = 'aaaaa'
        //     return  res.status('400')
        //     .send(error_signup)
        // }else {}
            const newUser = new users(req.body)
            await newUser.save();
            return res.send(newUser);
    } catch (error) {
        res.status('400').send(error);
    }
}
const getDetail = async (req, res, next) => {
    // const  {u_id}  = req.query;
   
    const profile = await users.findById(
        req.query.user_id
    );
    res.send(profile)

}
const checkUser = async (req, res, next) => {
    const {user_name } = req.query;

    const check = await users.findOne(
      { user_name: user_name}
    );
    res.send(check)

}


module.exports = {
    signup,
    getDetail,
    checkUser
};