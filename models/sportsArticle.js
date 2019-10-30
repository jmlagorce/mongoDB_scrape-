const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let Sportsarticleschema = new Schema ({
title: {
    type: String,
    required: true,
    unique: true
},
link: {
    type: String,
    require: true
},
saved: {
    type: Boolean,
    default: false

}



});

let Sportsarticle = mongoose.model("Sportsarticle", Sportsarticleschema);

module.exports = Sportsarticle;
