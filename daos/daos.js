const {ObjectId} = require("mongodb");
const db = require("../db");

exports.all = async () => {
    return db.get().collection("customer").find().toArray();
}


