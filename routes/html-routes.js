const path = require("path");


module.exports = function (app) {
    // 2 app.get for the stats and the exercise (res.sendfile?)
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/exercise.html'));
    })

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/stats.html'));
    })

}