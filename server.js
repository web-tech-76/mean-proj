const express = require("express");
const bodyParser = require("body-parser");
const {connect} = require("./db");

const controllers = require("./controllers/controller");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/all" , controllers.all)

const startServer = async () => {
    await connect("mongodb://192.168.1.152:27017/" , "test");

    app.listen(2023, () => {
        console.log("app started")
    });

}


startServer().then(r => console.log("started..."));

