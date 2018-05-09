module.exports = (app, db, token) => {
    app.post('/login', (req, res) => {
        db.serialize(() => {
            db.all(`select * from user where user_id = ? and user_pw = ?`, [req.body.id, req.body.pw], (err, rows) => {
                if (err) {
                    console.log(err);
                    res.status(400).end();
                } else {
                    console.log(rows.length);
                    if(rows.length == 1) {
                        console.log('token : ' + token);
                        res.send('token : ' + token);
                    } 
                    else {
                        res.status(400).end();
                    }
                }
            })
        })
    })
}