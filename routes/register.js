module.exports = (app, db) => {
    app.post('/register', (req, res) => {
        db.serialize(() => {
            db.run(`insert into user (user_name, user_number, user_id, user_pw, user_check, admin) values (?, ?, ?, ?, ?, ?)`, [req.body.name, req.body.number, req.body.id, req.body.pw, 0, req.body.admin], (err) => {
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
}