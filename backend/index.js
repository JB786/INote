const connectToMongo = require("./db");
const express = require('express')
const app = express()
const port = 5000

connectToMongo();

// If we want to use req.body to send content in body of req then we need to use middleware below if we want to send json data.
app.use(express.json())

// Available Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
  console.log(`App listening at http://127.0.0.1:${port}`)
})



// First of all after installing mongoose and express in our backend folder we create db.js in which we write our code for setting up mongoose than we export our connecttoMongo() func and import it to index.js.

// Inside index.js after importing connectToMongo() we will setup code for express.js then we run index.js using nodemon to test whether we connected to mongoDb or not if connection was successful we move to next step. If we can't connected to mongodb after entering mongod in powershell than that means we need to either change localhost to 127.0.0.1 in mongo URI or we need to type "mongod --ipv6" in powershell for connection. 

// Next, we create 2 folders models and routes - models folder contains schema's (logical collection of object in a database) for mongoDb and routes folder contains routes for express.js.

// Notes.js and User.js has first letter capital contains notes and user schema for mongoDb.

// auth.js and notes.js containes routes for express.js . We can only connect or get our request through these routes.

// we need to export mongoose models and router router for make it work inside index.js.