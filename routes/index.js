let express = require('express');
let app = express();
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

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.post('/register', (req, res) => {
    db.serialize(() => {
        db.run(`insert into user (user_name, user_number, user_id, user_pw) values (?, ?, ?, ?)`, [req.body.name, req.body.number, req.body.id, req.body.pw], (err) => {
            if (err) {
                console.log(err);
                res.status(400).end();
            } else {
                console.log('success');
                res.status(200).end();
            }
        });
    });
});

app.post('/login', (req, res) => {
    db.serialize(() => {
        db.get(`select * from user where user_id = ? and user_pw = ?`, [req.body.id, req.body.pw], (err) => {
            if (err) {
                console.log(err);
                res.status(400);
            } else {
                console.log('token : ' + token);
                res.send('token : ' + token);
            }
        })
    })
})

app.listen(1212, () => {
    console.log('Server running at 1212');
});
