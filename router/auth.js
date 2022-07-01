const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");
const cookieParser =require("cookie-parser");

router.use(cookieParser());

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello World from Server from router js`);
});


//promises not working

// router.post('/register', (req,res) => {

//     const {name,email,phone,department,password,cpassword} = req.body;

//     if(!name || !email || !phone || !department || !password || !cpassword){
//         return res.status(422).json({ error: "Please fill all the field properly"});
//     }

//     //console.log(req.body);
//     //res.json({ message: req.body});

//     User.findOne({email : email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({ error: "Email Already Exists !"});
//         }

//         const user = new User({name,email,phone,department,password,cpassword});

//         user.save().then(() => {
//             res.status(201).json({ message: "User Registered Succesfully !"});
//         }).catch((err) => res.status(500).json({ error : "Failed to registered !"}));
//     }).catch(err => { console.log(err); });

// });


//Async-Await

router.post('/register', async (req, res) => {

    const { name, email, phone, department, password, cpassword } = req.body;

    if (!name || !email || !phone || !department || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email Already Exists !" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password not matching !" });
        }
        else {
            const user = new User({ name, email, phone, department, password, cpassword });

            await user.save();

            res.status(201).json({ message: "User Registered Succesfully !" });
        }


    } catch (err) {
        console.log(err);
    }

});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" });
        }

        const userLogin = await User.findOne({ email: email });

        //console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 2589200000),
                httpOnly:true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            }
            else {
                res.json({ message: "user Signin Successfully" });
            }
        }
        else {
            res.status(400).json({ error: "Invalid Credentials" });
        }



    } catch (err) {
        console.log(err);
    }
})

//Profile Page

router.get('/Profile', authenticate ,(req,res) => {
    console.log(`Hello my Profile`);
    res.send(req.rootUser);
});

//Logout Page

router.get('/Logout' ,(req,res) => {
    console.log(`Hello my Logout Page`);
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("User Logout");
});

module.exports = router;