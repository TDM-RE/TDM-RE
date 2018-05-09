let express = require('express');
let app = express();
let cronJob = require("cron").CronJob;
let sqlite3 = require('sqlite3').verbose();
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let token_key = 'test';
let payload = {'uid':14554};
let token = jwt.sign(payload, token_key, {
    algorithm : 'HS256',
    expiresIn: 1440
});
let db = new sqlite3.Database('../model/db.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Connect to db.db');
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var dt = new Date();
var todayDate = {"date" :String(dt.getMonth()+1)+"/"+String(dt.getDate())};
console.log("date: ", todayDate.date);

const everyday = require("./everyday")(cronJob, todayDate, db);

const accept = require("./accept")(app, db);

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

let post = require('./register')(app, db);

let login = require('./login')(app, db, token);

//let logout = require('./logout');

let outing_list = require('./outing_list');
app.listen(process.env.port || 1212, () => {
    console.log('Server running at ' + process.env.port);
});
