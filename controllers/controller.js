const dao = require("../daos/daos");

exports.all = async (_, res, next) => {
    try {
        const docs = await dao.all();
        res.send(docs);
    } catch (err) {
        return next(err)
    }
};

