module.exports = () => {
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
}