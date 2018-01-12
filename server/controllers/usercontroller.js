var mongoose = require("mongoose")
var User = mongoose.model("User")

module.exports = {
    index:function(req, res){
        User.find({}, function(err, users) {
            res.render("index", {users: users})
        })
    },
    create:function(req, res){
        User.create({name: req.params.username}, function(err, user){
            res.redirect("/")
        })
    },
    find:function(req, res){
        // If I'm only expecting one result, use findOne
        User.findOne({name: req.params.username}, function(err, user){
            res.json(user)
        })
        // If you are expecting multiple entries, use find and send the array to ejs as an object to loop through
        // User.find({ name: req.params.username }, function (err, user) {
        //     res.render("show", { users: user }) // sends the user object to show.ejs as users, where you can then loop through users
        // })
    }
}