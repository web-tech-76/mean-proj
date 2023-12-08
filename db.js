const { MongoClient } = require("mongodb");

const state = {
    db: null,
};

exports.connect = async (url, dbName) => {
    try {
        if (state.db) {
            return;
        }
        const client = new MongoClient(url);
        await client.connect();
        state.db = client.db(dbName)
    } catch (err) {
        console.log(err);
    }
};

exports.get = function getDb(){
    return state.db
};

