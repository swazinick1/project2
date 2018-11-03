const express = require('express'); // routing
//router is a function of express
const router = express.Router(); // routing in smaller pieces, thats the goal
const path = require('path'); // find our html files on server, absoloute path

// all html routes are get function
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../app/public/home.html"))
})
module.exports = router; //exports small chunck of router to server.js


