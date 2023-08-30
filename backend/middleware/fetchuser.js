
// As we need to write code in each and every routes which needs an authentication, therefore to make it simple we created a middleware such that we do not need to write the whole piece of code in route instead we can use this middleware function in each and every route that required login. This makes our code more readable and understandable.

// We only need to pass this middleware as a second argument in our routes that require authentication to make it work.

const jwt = require("jsonwebtoken")
const JWT_SECRET_KEY = "thisisititisthis23$"

const fetchuser = (req, res, next) => {

    // Get the user from the jwt token and add id to req object

    // Bring token from the header
    const token = req.header("auth-token")

    // if token not available in the header
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token!" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET_KEY)
        req.user = data.user
        next()
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using a valid token!" })
    }
}


module.exports = fetchuser;