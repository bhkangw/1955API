var users = require("../controllers/usercontroller.js")

module.exports = function (app) {
    app.get("/", function (req, res) {
        users.index(req, res)
    })

    app.get("/new/:username", function (req, res) {
        users.create(req, res)
    })

    app.get("/delete/:username", function (req, res) {
        users.delete(req, res)
    })

    app.get("/:username", function (req, res) {
        users.find(req, res)
    })
}