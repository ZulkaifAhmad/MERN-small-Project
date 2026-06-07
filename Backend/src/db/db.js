const mongoose = require("mongoose");

async function dbConnect (url) {
    try {
        await mongoose.connect(url);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect ;