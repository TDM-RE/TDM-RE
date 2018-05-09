//선생님의 외출 허락 or 거절

module.exports = (app, db) => {

    app.post('/accept', (req, res) => {

        if (req.body.allow == true) {
            db.serialize(() => {
                db.run(`insert into extra (number, name, reason, time, allow) values (?, ?, ?, ?, ?)`, [req.body.number, req.body.name, req.body.reason, req.body.time, 1], (err) => {
                    if (err) {
                        console.log(err);
                        res.status(400).end();
                    }
                });

                db.run(`insert into record (number, name, reason, time, date, allow) values (?, ?, ?, ?, ?, ?)`, [req.body.number, req.body.name, req.body.reason, req.body.time, req.body.date, 1], (err) => {
                    if (err) {
                        console.log(err);
                        res.status(400).end();
                    }
                });

                db.run('update user set check = ? where user_number = ?', [true, req.body.number], (err)=> {
                    if(err) {
                        console.log(err);
                        res.status(200).end();
                    } else {
                        res.status(200).end();
                    }
                });
            });

        } else {
            db.serialize(() => {
                db.run(`insert into extra (number, name, reason, time, reject_reason, allow) values (?, ?, ?, ?, ?, ?)`, [req.body.number, req.body.name, req.body.reason, req.body.time, reject_reason, 0], (err) => {
                    if (err) {
                        console.log(err);
                        res.status(400).end();
                    }
                });

                db.run(`insert into record (number, name, reason, time, date, reject_reason, allow) values (?, ?, ?, ?, ?, ?, ?)`, [req.body.number, req.body.name, req.body.reason, req.body.time, req.body.date, req.body.reject_reason, 0], (err) => {
                    if (err) {
                        console.log(err);
                        res.status(400).end();
                    } else {
                        res.status(200).end();
                    }
                });
            });
        }
    });
}