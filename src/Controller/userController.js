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
    const { user_name } = req.query;

    const check = await users.findOne(
        { user_name: user_name }
    );
    res.send(check)

}
const updateUser = async (req, res, next) => {
    // console.log(req.body);
    // req.body.title = "Flying";
    // const { title, type } = req.body;

    req.user.password = req.body.password;
    req.user.firstName = req.body.firstName;
    req.user.lastName = req.body.lastName;
    req.user.height = req.body.height;
    req.user.weight = req.body.weight;
    req.user.birthday = req.body.birthday;

    await req.user.save();
    // console.log(req.body);
    res.send(req.user);
    // console.log(req.body)
};

module.exports = {
    signup,
    getDetail,
    checkUser,
    updateUser
};