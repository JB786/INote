const express = require("express")
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const router = express.Router()

// Uses a version 16.15.0 for express-validator.

//Create a User using - POST "/api/auth/createuser". Login not required
router.post("/createuser", [
    body("name", "Atleast 3 characters long!").isLength({ min: 3 }),
    body("email", "Invalid Email!").isEmail(),
    body("password", "Password must be atleast 8 to 16 characters long!").isLength({ min: 8, max: 16 })
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        // chech whether user with this email exists already
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "E-mail already exist! Please enter a new one." });
        }
        // creates a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.json(user)

    }
    catch(error){
        console.error(error.message)
        return res.status(500).send("Some Error Occured!")
    }
});

module.exports = router;