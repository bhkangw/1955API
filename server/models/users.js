var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    id: Number,
}, { timestamps: true })

mongoose.model("User", UserSchema)