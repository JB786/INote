const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    obj = {
        title: "My first API",
        description: "This is the first dumbest API I created."
    }
    res.json(obj)
})

module.exports = router;