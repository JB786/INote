const express = require("express")
const Notes = require("../models/Notes")
const fetchuser = require("../middleware/fetchuser")
const { body, validationResult } = require('express-validator');
const router = express.Router()

// Route-1: Get all Notes - GET "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)

    } catch (error) {
        console.error(error.message)
        return res.status(500).send("Internal Server Error!")
    }

})

// Route-2: Add a new note - POST "/api/notes/addnote". Login required
router.post("/addnote", fetchuser, [
    body("title", "Atleast 3 characters long!").isLength({ min: 3 }),
    body("description", "Invalid Email!").isLength({ min: 5 })
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        // if there are errors return bad request and errors.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id
        });

        const savedNote = await note.save();

        res.json(savedNote);

    } catch (error) {
        console.error(error.message)
        return res.status(500).send("Internal Server Error!")
    }
})

// Route-3: Update an existing note - PUT "/api/notes/updatenote/:id". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {

    try {
        // Create a newNote object
        const { title, description, tag } = req.body;
        const newNote = {}

        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // find the note to be updated and update it
        let note = await Notes.findById(req.params.id) // params is the ":id"

        if (!note) {
            return res.status(404).send("NOT FOUND!");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed!");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({ note })

    } catch (error) {
        console.error(error.message)
        return res.status(500).send("Internal Server Error!")
    }

});


module.exports = router;