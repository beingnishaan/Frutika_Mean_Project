
const UserModel = require('../models/UserModel')
const bcrypt = require('bcryptjs');


const SecurePassword = async (password) => {
    try {
        const HashPassword = await bcrypt.hash(password, 10);
        return HashPassword;
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const register = async (req, res) => {
    try {
        const Passwordhash = await SecurePassword(req.body.password)
        const UserData = await UserModel({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            password: Passwordhash,
            image: req.file.filename,
        });
        const duplicateEmail = await UserModel.findOne({ email: req.body.email })
        if (duplicateEmail) {
            res.status(400).json({ success: false, message: "email already exist" });
        } else {
            res.status(200).json({ success: true, message: 'Register successfully', status:200 })
            const user_data = await UserData.save();
        }
    } catch (error) {
        res.status(400).json(error.message)
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({success: true,"user": user,});
        }
        res.status(400).json({ success: false, message: "Invalid Credentials" });
    } catch (err) {
        console.log(err);
    }
}



module.exports = {
    register, login
}